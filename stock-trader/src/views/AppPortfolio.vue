<template>
  <div class="container mt-5 row">
    <h3 v-if="stocks.length === 0">Go and buy some stocks!</h3>
    <AppStock v-for="(stock, i) in stocks"
              :key="i"
              :stock="stock"
              :parent="$options.name"
    />
  </div>
</template>

<script>
  import AppStock from "../components/AppStock";
  import {mapGetters} from 'vuex'

  export default {
    name: "AppPortfolio",
    components: {
      AppStock
    },
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    }
  }
</script>

