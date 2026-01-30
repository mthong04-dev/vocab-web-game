<template>
  <div class="container">
    <h1>Show Word</h1>
    <WordForm :word="word" :readonly="true" />
    <router-link :to="`/words/${word._id}/edit`" class="edit-button">
      ✏️ Edit word?
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';
import WordForm from '@/components/WordForm.vue';

export default {
  components: { WordForm },
  data() {
    return {
      word: {}
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/words/${this.$route.params.id}`)
      .then(res => {
        this.word = res.data;
      });
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.edit-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.25rem;
  background-color: #facc15;
  color: #000;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #eab308;
}
</style>
