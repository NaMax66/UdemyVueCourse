<template>
  <div class="container mt-5 row">
    <AppStock v-for="(stock, i) in stocks"
              :key="i"
              :stock="stock"
              :parent="$options.name"
    ></AppStock>
  </div>
</template>

<script>
  import AppStock from '../components/AppStock'
  export default {
    name: 'AppStocksContainer',
    components: {
      AppStock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }

</script>
