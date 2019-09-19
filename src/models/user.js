// Modelo para los usuarios
const mongoose = require('mongoose');
const { Schema } = mongoose;
// Hasheo de contraseñas
const bcrypt = require('bcrypt-nodejs');

// Estructura de usuarios
const userSchema = new Schema({
    email: String,
    password: String,
});


// ------------- Encriptación de la contraseña ---------

userSchema.methods.encryptPassword = (password) => {
 // espera la contraseña  
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
//  Comparación de contraseñas
userSchema.methods.comparePassword = function (password) {
   return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('users',userSchema)