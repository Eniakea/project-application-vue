<template>
  <navbar></navbar>
  <home></home>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'

export default {
  components: {
    Navbar,
    Home
  },
  data() {
    return {
    };
  }
};
</script>