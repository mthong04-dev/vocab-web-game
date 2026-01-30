// 📁 server/api/VocabController.js
const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

// 🔍 Get all words by language
exports.list_all_words = async (req, res) => {
  try {
    const { language } = req.query;
    const filter = language ? { language } : {};
    const words = await Vocab.find(filter);
    res.json(words);
  } catch (err) {
    res.status(500).send(err);
  }
};

// ➕ Add new word
exports.create_a_word = async (req, res) => {
  try {
    const { word, language } = req.body;
    if (!word || !language) {
      return res.status(400).json({ message: 'Word and language are required.' });
    }

    const exists = await Vocab.findOne({ word, language });
    if (exists) {
      return res.status(409).json({ message: `The word '${word}' already exists in ${language}.` });
    }

    const newWord = new Vocab({ word, language });
    const saved = await newWord.save();
    res.json(saved);
  } catch (err) {
    res.status(500).send(err);
  }
};

// 📄 View 1 word by ID
exports.read_a_word = async (req, res) => {
  try {
    const word = await Vocab.findById(req.params.wordId);
    if (!word) return res.status(404).json({ message: 'Word not found.' });
    res.json(word);
  } catch (err) {
    res.status(500).send(err);
  }
};

// 📝 Update word
exports.update_a_word = async (req, res) => {
  try {
    const updated = await Vocab.findOneAndUpdate(
      { _id: req.params.wordId },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Word not found to update.' });
    res.json(updated);
  } catch (err) {
    res.status(500).send(err);
  }
};

// ❌ Delete word
exports.delete_a_word = async (req, res) => {
  try {
    const result = await Vocab.deleteOne({ _id: req.params.wordId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Word not found to delete.' });
    }
    res.json({ message: 'Word deleted successfully', id: req.params.wordId });
  } catch (err) {
    res.status(500).send(err);
  }
};
