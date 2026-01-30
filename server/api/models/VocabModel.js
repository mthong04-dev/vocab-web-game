const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VocabSchema = new Schema({
  language: {
    type: String,
    required: true
  },
  word: {
    type: String,
    required: true
  }
}, {
  collection: 'vocab',
  timestamps: true
});


VocabSchema.index({ language: 1, word: 1 }, { unique: true });

module.exports = mongoose.model('Vocab', VocabSchema);
