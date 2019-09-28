<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p v-if="email">Your e-mail: {{ email }}</p>
    <p v-else>You should only get here if you're authenticated!</p>
  </div>
</template>

<script>

  export default {
    computed: {
      email() {
        return !this.$store.getters.user ? false : this.$store.getters.user.email;
      }
    },

    created() {
      this.$store.dispatch('fetchUser');
    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
