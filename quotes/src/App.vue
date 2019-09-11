<template>
  <div class="container">
    <AppHeader :quoteCount="quotes.length"
               :maxQuotes="maxQuotes"/>
    <AppQuoteNew @quoteAdded="newQuote"/>
    <AppQuoteGrid :quotes="quotes"
                  @quoteDeleted="deleteQuote"
    />
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppQuoteGrid from "./components/AppQuoteGrid.vue";
  import AppQuoteNew from "./components/AppQuoteNew.vue";
  import AppHeader from "./components/AppHeader.vue"

  export default {
    data() {
      return {
        maxQuotes: 10,
        quotes: ['Just a quote to see something'],
        quoteTxt: ""
      };

    },
    components: {
      AppQuoteGrid,
      AppQuoteNew,
      AppHeader
    },
    methods: {
      newQuote(quote) {
        if (this.quotes.length >= this.maxQuotes){
          alert('Please delete Quotes first!');
          return;
        }

        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1)
      }
    }
  };
</script>

<style>

</style>
