<template>
  <form @submit.prevent="handleSubmit" class="word-form">
    <div class="form-group">
      <span class="label">
        <span v-if="word.language === 'english'">🇬🇧 English</span>
        <span v-else-if="word.language === 'german'">🇩🇪 German</span>
        <span v-else-if="word.language === 'spanish'">🇪🇸 Spanish</span>
      </span>
      <input
        type="text"
        v-model="word.word"
        :readonly="readonly"
        placeholder="Enter word..."
        class="input-field"
      />
    </div>

    <!-- Only show Submit button if not readonly -->
    <div v-if="!readonly" class="submit-container">
      <button type="submit" class="submit-button">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    word: {
      type: Object,
      required: true
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.word);
    }
  }
};
</script>

<style scoped>
.word-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  align-items: center;
}

.label {
  background-color: #e5e7eb;
  padding: 0.75rem 1rem;
  border-radius: 6px 0 0 6px;
  font-weight: bold;
  display: inline-block;
  white-space: nowrap;
}

.input-field {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 6px 6px 0;
  outline: none;
}

.submit-container {
  text-align: center;
}

.submit-button {
  background-color: #22c55e;
  color: white;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #16a34a;
}
</style>
