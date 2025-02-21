<template>
  <div id="logo-body">
    <p class="description">
      <span id="type-it" />
    </p>
    <h1 class="heading">
      <span class="t1">MXXIV</span><span class="t2">.net</span>
    </h1>
    <small class="codename">&copy; 2010-2025 MXXIV.net</small>
  </div>
</template>

<script>
import TypeIt from 'typeit';

export default {
  name: 'Splash',
  mounted() {
    new TypeIt('#type-it', {
      strings: ['1986', '1024'],
      speed: 50,
      waitUntilVisible: true,
      breakLines: false,
      autoStart: false,
    }).go();
  },
};
</script>

<style scoped>
#logo-body {
  position: relative;
  background: #1c1e26;
  height: -webkit-calc(100vh - 48px);
  height: calc(100vh - 48px);
  overflow: hidden;
  text-align: center;
}
#logo-body .description {
  color: #f5f5f5;
  position: absolute;
  top: 49vh;
  width: 100%;
  text-align: left;
  margin: 0;
  margin-left: 5vw;
}
#logo-body .heading {
  font-size: 2.8em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 35vh;
  width: 100%;
  height: 20vh;
  min-height: 42px;
  text-align: left;
  margin: 0;
  margin-left: 5vw;
}
#logo-body .heading .t1 {
  font-size: 1.45em;
  color: #f5f5f5;
}
#logo-body .heading .t2 {
  font-size: 0.65em;
  color: #c8dc00;
}
#logo-body .codename {
  position: absolute;
  bottom: 2px;
  right: 3px;
  color: #616161;
  z-index: 5;
  font-size: 0.55em;
}
</style>
