const vocabBuilder = require('../controllers/VocabController');

module.exports = app => {
  app
    .route('/words')
    .get(vocabBuilder.list_all_words)       // take all word
    .post(vocabBuilder.create_a_word);      // add new word

  app
    .route('/words/:wordId')
    .get(vocabBuilder.read_a_word)          // take 1 word by using ID
    .put(vocabBuilder.update_a_word)        // update word
    .delete(vocabBuilder.delete_a_word);    // delete word
};
