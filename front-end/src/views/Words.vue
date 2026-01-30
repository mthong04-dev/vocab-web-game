<template>
  <div>
    <div class="table-wrapper">
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Show</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="word in words" :key="word._id">
            <td>{{ word.word }}</td>
            <td>
              <router-link
                :to="{ name: 'show', params: { language, id: word._id } }"
                class="ui blue button"
              >
                Show
              </router-link>
            </td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { language, id: word._id } }"
                class="ui orange button"
              >
                Edit
              </router-link>
            </td>
            <td>
              <button @click="deleteWord(word._id)" class="ui red button">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="add-new-container">
      <router-link :to="`/${language}/new`" class="add-new-button">
        ➕ Add new word
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'Words',
  data() {
    return {
      words: []
    };
  },
  computed: {
    language() {
      return this.$route.params.language;
    }
  },
  methods: {
    async fetchWords() {
      this.words = await api.getWords(this.language);
    },
    async deleteWord(id) {
      if (confirm('Are you sure you want to delete this word?')) {
        await api.deleteWord(id);
        this.fetchWords();
      }
    }
  },
  watch: {
    language: 'fetchWords'
  },
  mounted() {
    this.fetchWords();
  }
};
</script>

<style scoped>
.table-wrapper {
  width: 90%;
  margin: auto;
  margin-top: 2rem;
}

.add-new-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.add-new-button {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.add-new-button:hover {
  background-color: #2563eb;
}

table.ui.table th,
table.ui.table td {
  text-align: center;
  vertical-align: middle;
}
</style>
