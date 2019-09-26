<template>
  <div>
    <b-navbar toggleable="lg"
              type="dark"
              variant="dark"
    >
      <div class="container">
        <router-link to="/" tag="li">
          <b-navbar-brand class="pointer">Stock Trader</b-navbar-brand>
        </router-link>
        <!--add a filter that defined in main.js-->
        <strong class="navbar-text mr-4 ml-4">Funds: {{ funds | currency }}</strong>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
            <router-link to="/portfolio"
                         tag="li"
                         class="nav-item nav-link pointer"
                         :class="isActive('app-portfolio')"
            >Portfolio</router-link>

            <router-link to="/stocks"
                         tag="li"
                         class="nav-item nav-link pointer"
                         :class="isActive('AppStocksContainer')"
            >Stocks</router-link>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"
                        @click="endDay"
            >End Day</b-nav-item>

            <b-nav-item-dropdown text="Save & Load" right>
              <b-dropdown-item href="#"
                               @click="saveMyState"
              >Save</b-dropdown-item>
              <b-dropdown-item href="#"
                               @click="loadMyState"
              >Load</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "AppHeader",
    methods: {
      ...mapActions([
        'randomizeStocks',
        'loadData'
      ]),

      endDay(){
        this.randomizeStocks();
      },

      saveMyState() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };

        this.$http.put('data.json', data);
      },

      loadMyState() {
        this.loadData();
      },

      isActive(route){
        return this.$route.name === route ? 'active' : ''
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds
      }
    }
  };


</script>

<style>
  .pointer {
    cursor: pointer;
  }

</style>
