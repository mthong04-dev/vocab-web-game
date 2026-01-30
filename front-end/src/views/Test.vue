<template>
    <div class="test-container">
      <h1>🧠 Flash Card Practice</h1>
  
      <select v-model="selectedLanguage" @change="fetchWords">
        <option disabled value="">Select a language</option>
        <option value="english">English</option>
        <option value="german">German</option>
        <option value="spanish">Spanish</option>
      </select>
  
      <div v-if="word" class="flash-card" @click="flipped = !flipped">
        <div v-if="!flipped">
          <p class="lang-label">Language: {{ selectedLanguage }}</p>
          <p class="hint">Hint: {{ getHint(word.word) }}</p>
          <p class="tap-msg">(Click to reveal)</p>
        </div>
        <div v-else>
          <p class="answer">{{ word.word }}</p>
          <p class="tap-msg">(Click to hide)</p>
        </div>
      </div>
  
      <button v-if="words.length" @click="nextWord" class="next-btn">Next Word</button>
      <p v-else-if="selectedLanguage" class="no-data-msg">No words found for this language.</p>
    </div>
  </template>
  
  <script>
  import { api } from '../helpers/helpers';
  
  export default {
    data() {
      return {
        selectedLanguage: '',
        words: [],
        word: null,
        flipped: false
      };
    },
    methods: {
      async fetchWords() {
        if (!this.selectedLanguage) return;
        const result = await api.getWords(this.selectedLanguage);
        this.words = result || [];
        if (this.words.length > 0) {
          this.nextWord();
        } else {
          this.word = null;
        }
      },
      nextWord() {
        this.flipped = false;
        if (this.words.length === 0) return;
        const index = Math.floor(Math.random() * this.words.length);
        this.word = this.words[index];
      },
      getHint(word) {
        if (!word) return '';
        const length = word.length;
        const hintCount = length > 5 ? 3 : 2;
        const indexes = new Set();
        while (indexes.size < hintCount) {
          indexes.add(Math.floor(Math.random() * length));
        }
        return [...word].map((ch, idx) =>
          indexes.has(idx) ? ch : '_'
        ).join('');
      }
    }
  };
  </script>
  
  <style scoped>
  .test-container {
    max-width: 600px;
    margin: auto;
    text-align: center;
    padding: 2rem;
  }
  
  select {
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
  
  .flash-card {
    border: 2px solid #9333ea;
    border-radius: 12px;
    padding: 2rem;
    background: #f3e8ff;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }
  
  .flash-card:hover {
    background-color: #e9d5ff;
  }
  
  .lang-label {
    font-weight: bold;
    color: #7e22ce;
  }
  
  .hint {
    font-size: 1.8rem;
    letter-spacing: 4px;
    margin: 1rem 0;
  }
  
  .answer {
    font-size: 2rem;
    font-weight: bold;
    color: #1e293b;
  }
  
  .tap-msg {
    font-size: 0.85rem;
    color: #6b7280;
    margin-top: 0.75rem;
  }
  
  .next-btn {
    margin-top: 1rem;
    background: #9333ea;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .next-btn:hover {
    background-color: #7e22ce;
  }
  
  .no-data-msg {
    margin-top: 2rem;
    color: #888;
  }
  </style>
  