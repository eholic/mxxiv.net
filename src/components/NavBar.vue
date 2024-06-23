<template>
  <nav
    class="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        Top
      </router-link>
      <router-link :to="{name: 'TopPage', hash: '#apps'}" class="navbar-item">Apps</router-link>
      <router-link :to="{name: 'TopPage', hash: '#labs'}" class="navbar-item">Labs</router-link>
      <a
        class="navbar-item"
        href="https://github.com/eholic"
        target="_blank"
      >
        <span class="icon is-medium">
          <font-awesome-icon
            :icon="['fab', 'github']"
            pull="left"
          />
        </span>
      </a>
      <a
        class="navbar-item"
        href="https://www.linkedin.com/in/task1024/"
        target="_blank"
      >
        <span class="icon is-medium">
          <font-awesome-icon
            :icon="['fab', 'linkedin-in']"
            pull="left"
          />
        </span>
        About
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
nav.navbar {
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  background-color: #12171a;
}
</style>
