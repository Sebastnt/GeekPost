"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post, Design
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import json

api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "User doesn't exist"}), 404
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token)


@api.route("/home", methods=["GET"])
@jwt_required()
def home():
    response_body = {
        "msg": "Hello, you are logged in",
    }
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


@api.route("/signup", methods=["POST"])
def signup():
    body = json.loads(request.data)
    user = User.query.filter_by(email=body["email"]).first()

    if user:
        return jsonify({"msg": "User already exists"}), 404

    new_user = User(
        email = body["email"], 
        password = body["password"],
        name = body["name"],
        last_name = body["last_name"])

    db.session.add(new_user)
    db.session.commit()
    
    response_body = {"msg": "Hello, you have signed up"}
    return jsonify(response_body), 200


@api.route('/profile/<int:user_id>', methods=['DELETE'])
@jwt_required()
def delete_account(user_id):
    current_user = get_jwt_identity()
    user_query = User.query.filter(user_id==current_user).first()

    if user_query:
        db.session.delete(user_query)
        db.session.commit()
        return jsonify({"msg": "Your account has been deleted"}), 200
    
    if not user_query:
        return jsonify({"msg": "Not able to delete this account"}), 200


@api.route('/profile/<int:user_id>', methods=['PUT'])
@jwt_required()
def update_account(user_id):
    current_user = get_jwt_identity()
    user_query = User.query.filter(user_id==current_user).first()

    body = json.loads(request.data)
    updated_user = User(
        email = body["email"], 
        password = body["password"],
        name = body["name"],
        last_name = body["last_name"])

    db.session.commit()
    return jsonify({"msg": "You information has been updated"}), 200