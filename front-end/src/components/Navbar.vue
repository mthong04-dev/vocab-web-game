<template>
  <div class="navbar">
    <router-link to="/" class="nav-button">🏠 Home</router-link>
    <router-link to="/english" class="nav-button" :class="{ selected: currentLang === 'english' }">🇬🇧 English</router-link>
    <router-link to="/german" class="nav-button" :class="{ selected: currentLang === 'german' }">🇩🇪 German</router-link>
    <router-link to="/spanish" class="nav-button" :class="{ selected: currentLang === 'spanish' }">🇪🇸 Spanish</router-link>
    <router-link to="/test" class="nav-button test">🧠 Test</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    currentLang() {
      return this.$route.params.language;
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}
.nav-button {
  background-color: white;
  border: 2px solid #2563eb;
  color: #2563eb;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}
.nav-button:hover {
  background-color: #e5f0ff;
}
.nav-button.selected {
  background-color: #2563eb;
  color: white;
}
.nav-button.test {
  border-color: #9333ea;
  color: #9333ea;
}
</style>
