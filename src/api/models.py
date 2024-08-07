from flask_sqlalchemy import SQLAlchemy
from datetime import date
from enum import Enum, auto
from sqlalchemy.orm import validates

db = SQLAlchemy()

colores_mascotas = db.Table('colores_mascotas',
    db.Column('mascota_id', db.Integer, db.ForeignKey('mascota.id'), primary_key=True),
    db.Column('color_id', db.Integer, db.ForeignKey('color.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(50), nullable=False)
    fecha_registro = db.Column(db.Date, default=date.today())
    telefono = db.Column(db.String, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    mascotas = db.relationship('Mascota', backref='user', lazy=True)
    localidad_id = db.Column(db.Integer, db.ForeignKey('localidad.id'), nullable=False)
    favorito_id = db.Column(db.Integer, db.ForeignKey('favorito.id'))
    
    @validates('nombre')
    def validate_nombre(self, key, nombre):
        if len(nombre) < 3:
            raise ValueError("Nombre debe tener al menos 3 caracteres")
        return nombre

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "fecha_registro": self.fecha_registro,
            "telefono": self.telefono,
            "is_active": self.is_active,
            "mascotas": self.mascotas,
            "localidad_id": self.localidad_id,
            "favorito_id": self.favorito_id

        }

class Estado(Enum):
    PERDIDO = 'perdido'
    ENCONTRADO = 'encontrado'
    ADOPCION = 'adopcion'
    REUNIDO = 'reunido'

class Sexo(Enum):
    MACHO = 'macho'
    HEMBRA = 'hembra'
    INDEFINIDO = 'indefinido'

class Mascota(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    edad = db.Column(db.String(120), nullable=False)
    sexo = db.Column(db.Enum(Sexo), nullable=False)
    descripcion = db.Column(db.String(250), nullable=False)
    estado = db.Column(db.Enum(Estado), nullable=False)
    fecha_registro = db.Column(db.Date, default=date.today())
    fecha_perdido = db.Column(db.Date, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    especie_id = db.Column(db.Integer, db.ForeignKey('especie.id'), nullable=False)
    localidad_id = db.Column(db.Integer, db.ForeignKey('localidad.id'), nullable=False)
    colores_mascotas = db.relationship('Color', secondary = colores_mascotas, lazy = 'subquery', backref=db.backref('mascota', lazy=True))
    favorito_id = db.Column(db.Integer, db.ForeignKey('favorito.id'))

    def __repr__(self):
        return f'<Mascota {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "fecha_registro": self.fecha_registro,
            "edad": self.edad,
            "estado": self.estado.name,
            "descripcion": self.descripcion,
            "sexo": self.sexo.name,
            "fecha_registro": self.fecha_registro,
            "fecha_perdido": self.fecha_perdido,
            "is_active": self.is_active,
            "user_id": self.user_id,
            "especie_id": self.especie_id,
            "localidad_id": self.localidad_id,
            "colores_mascotas": [color.serialize() for color in self.colores_mascotas],
            "favorito_id": self.favorito_id

        }

class Especie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    mascotas = db.relationship('Mascota', backref='especie', lazy=True)
    razas = db.relationship('Raza', backref='especie', lazy=True)

    def __repr__(self):
        return '<Especie %r>' % self.name
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }   

class Raza(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    especie_id = db.Column(db.Integer, db.ForeignKey('especie.id'),
        nullable=False)

    def __repr__(self):
        return '<Raza %r>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class Departamento(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    localidades = db.relationship('Localidad', backref='departamento', lazy=True)

    def __repr__(self):
        return '<Departamento %r>' % self.name
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }
    
class Localidad(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    departamento_id = db.Column(db.Integer, db.ForeignKey('departamento.id'), nullable=False)
    users = db.relationship('User', backref='localidad', lazy=True)
    mascotas = db.relationship('Mascota', backref='localidad', lazy=True)

    def __repr__(self):
        return '<Localidad %r>' % self.name
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }
    
class Color(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)

    def __repr__(self):
        return '<Color %r>' % self.name
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class Favorito(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    users = db.relationship('User', backref='favorito', lazy=True)
    mascotas = db.relationship('Mascota', backref='favorito', lazy=True)
    

    def __repr__(self):
        return '<Favoritos %r>' % self.id
    
    def serialize(self):
        return {
            "id": self.id
        }