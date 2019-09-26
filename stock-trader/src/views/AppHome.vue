<template>
  <div class="container mt-5">
    <h1>Stock Trader</h1>
    <h2>Trade or view your Portfolio</h2>
    <h6>You may Save & Load your Data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <hr>
    <p>Your Funds {{ funds | currency }}</p>
  </div>
</template>
<script>
  export default {
    name: 'AppHome',
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }

</script>
