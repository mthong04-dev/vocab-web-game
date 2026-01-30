<template>
    <div class="landing-page">
      <div class="left">
        <h1>{{ title }}</h1>
        <p>{{ slogan }}</p>
        <router-link :to="startLink" class="start-button">Start Learning</router-link>
      </div>
      <div class="right">
        <img :src="heroImage" alt="Illustration" class="hero-image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
    data() {
      return {
        title: 'Master Vocabulary Your Way',
        slogan: 'Choose your language. Learn at your pace.',
        heroImage: require('@/assets/hero-art.png'),
        startLink: '/english'
      };
    }
  };
  </script>
  
  <style scoped>
  .landing-page {
    display: flex;
    height: 100vh;
    background: linear-gradient(135deg, #dbeafe, #f0f9ff);
    font-family: 'Segoe UI', sans-serif;
    overflow: hidden;
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 4rem;
    animation: fadeInLeft 1s ease-out;
  }
  .left h1 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}


.left p {
  font-size: 1.25rem;
  color: #374151;
  margin-bottom: 2rem;
}

  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    animation: fadeInRight 1s ease-out;
  }
  .hero-image {
    width: 90%;
    max-width: 1500px;
    border-radius: 12px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  .start-button {
  margin-top: 2rem;
  background-color: #3b82f6;
  color: white;
  padding: 1.25rem 2.5rem;
  font-size: 1.25rem;   
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

  .start-button:hover {
    background-color: #2563eb;
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  </style>
  