from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    website_url = db.Column(db.String(250), unique=True, nullable=True)
    facebook_profile =  db.Column(db.String(250), nullable=True)
    instagram_profile =  db.Column(db.String(250), nullable=True)
    business_name =  db.Column(db.String(250), nullable=True)
    post = db.relationship('Post', backref='user', lazy=True)
    design = db.relationship('Design', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    post_name = db.Column(db.String(250), nullable=True)
    
    def __repr__(self):
        return '<Post %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
        }

class Design(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    design_name = db.Column(db.String(250), nullable=True)
    
    def __repr__(self):
        return '<Design %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
        }