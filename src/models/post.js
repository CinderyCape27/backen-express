const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const PostSchema = new Schema({
    
    title: String,
    description: String,
    author: String,
    
});

module.exports = mongoose.model('posts', PostSchema);