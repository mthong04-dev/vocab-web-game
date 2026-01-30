<template>
    <div class="new-container">
      <h1>Add New Word ({{ capitalizedLanguage }})</h1>
      <form @submit.prevent="submitWord">
        <div class="input-group">
          <span class="prefix">{{ flag }} {{ capitalizedLanguage }}</span>
          <input
            v-model="word"
            type="text"
            placeholder="Enter word..."
            required
          />
        </div>
        <button type="submit" class="submit-button">Add Word</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        word: ''
      };
    },
    computed: {
      language() {
        return this.$route.params.language;
      },
      capitalizedLanguage() {
        return this.language.charAt(0).toUpperCase() + this.language.slice(1);
      },
      flag() {
        const flags = {
          english: '🇬🇧',
          german: '🇩🇪',
          spanish: '🇪🇸'
        };
        return flags[this.language] || '';
      }
    },
    methods: {
      async submitWord() {
        try {
          const res = await axios.post('http://localhost:3000/words', {
            word: this.word,
            language: this.language
          });
          this.$router.push(`/${this.language}`);
        } catch (err) {
          alert(err.response?.data?.message || 'Error adding word');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .new-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .prefix {
    background-color: #f3f4f6;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-right: none;
    border-radius: 6px 0 0 6px;
    font-weight: bold;
    min-width: 120px;
  }
  input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0 6px 6px 0;
    outline: none;
  }
  .submit-button {
    margin-top: 1rem;
    background-color: #10b981;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  .submit-button:hover {
    background-color: #059669;
  }
  </style>
  