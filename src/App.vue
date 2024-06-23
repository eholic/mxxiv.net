<template>
  <div id="app">
    <splash />
    <nav-bar />

    <main>
      <div class="content">
        <router-view />
      </div>
    </main>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Powered by
          <a href="https://vuejs.org/">Vue.js</a> and
          <a href="https://bulma.io/">BULMA</a>
          .
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Splash from './components/Splash.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { Splash, NavBar },
};
</script>
