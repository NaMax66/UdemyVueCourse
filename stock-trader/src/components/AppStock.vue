<template>
  <div class="col-lg-3 col-md-6 col-sm-12">

    <h5 class="card-header pl-0"
        :class="isMyStock ? 'color-blue' : 'color-green' "
    >{{stock.company}} <small>(price: {{stock.price}}$)</small></h5>

    <div class="card-body pl-0 pr-0">

          <div class="d-inline-block">
            <input type="number"
                   v-model.number="quantity"
                   class="form-control"
                   :style="(insufficientFunds && !isMyStock) || (insufficientAmount && isMyStock) ? 'border: red 1px solid' : ''"
                   placeholder="quantity">
          </div>
          <div class="d-inline-block ml-2">
            <button class="btn"
                    @click="action(isMyStock)"
                    :disabled="(insufficientFunds && !isMyStock) || (insufficientAmount && isMyStock) || quantity <= 0 || !Number.isInteger(quantity)"
                    :class="isMyStock ? 'btn-primary' : 'btn-success'"
            >{{ isMyStock ? 'Sell' : 'Buy' }}</button>
          </div>
    </div>
    <div style="height: 3rem">
      <p style="background-color: lightcoral"
         v-if="insufficientFunds && !isMyStock"
      >Insufficient funds</p>
    </div>


    <p v-if="isMyStock"
    >Amount: {{ stock.quantity }}</p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "AppStock",

    data() {
      return {
        quantity: 0
      }
    },

    computed: {
      isMyStock(){
        if (this.parent === 'AppStocksContainer')
          return false;
        else return true;
      },

      funds() {
        return this.$store.getters.funds;
      },

      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      },
      insufficientAmount() {
        return this.quantity > this.stock.quantity
      }
    },

    props: {
      stock: Object,
      parent: String
    },
    methods: {
      ...mapActions([
        'sellStock'
      ]),
      action(isMyStock) {
        if (isMyStock){
          //sell stock
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
          };
          this.sellStock(order);
          this.quantity = 0;
        }
        //buy stock
        else {
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
          };
          this.$store.dispatch('buyStock', order);
          this.quantity = 0;

          //this.$store.commit('addToMyStocks', this.stock)
        }
      }
    }
  }
</script>

<style>
  .color-green {
    background-color: lightgreen;
  }

  .color-blue {
    background-color: lightblue;
  }

  .card-body {
    display: flex;
  }

</style>
