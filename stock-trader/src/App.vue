<template>
  <div id="app">
    <AppHeader/>
    <div class="container">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
      <p class="app-info">Testing info: {{getInfo()}}</p>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./views/AppHeader";

  export default {
    components: {
      AppHeader
    },
    methods: {
      getInfo() {
        return "route name: " + this.$route.name;
      }
    },
    created() {
      this.$store.dispatch("initStocks");
    }

  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .app-info {
    font-size: .8rem;
    margin-top: 15rem;
  }

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-2rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-2rem);
      opacity: 0;
    }
  }

</style>
