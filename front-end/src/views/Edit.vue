<template>
  <div class="edit-container">
    <h1>Edit Word</h1>
    <WordForm v-if="word._id" :word="word" @submit="updateWord" />
  </div>
</template>

<script>
import WordForm from '@/components/WordForm.vue';
import axios from 'axios';

export default {
  components: { WordForm },
  data() {
    return {
      word: {}
    };
  },
  async created() {
    const id = this.$route.params.id;
    const response = await axios.get(`http://localhost:3000/words/${id}`);
    this.word = response.data;
  },
  methods: {
    async updateWord(updatedWord) {
      await axios.put(`http://localhost:3000/words/${updatedWord._id}`, updatedWord);
      this.$router.push(`/${updatedWord.language}`);
    }
  }
};
</script>

<style scoped>
.edit-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}
</style>
