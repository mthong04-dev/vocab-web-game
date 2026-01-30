<template>
  <div id="app">
    <!-- Hide Navbar if it is a landing page -->
    <Navbar v-if="!isLandingPage" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  computed: {
    isLandingPage() {
      return this.$route.name === 'landing';
    }
  }
};
</script>
