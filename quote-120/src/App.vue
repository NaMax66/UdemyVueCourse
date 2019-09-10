<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent='AppQuote'">Quote</button>
        <button @click="selectedComponent='AppAuthor'">Author</button>
        <button @click="selectedComponent='AppNew'">New</button>
        <hr>
        <p>{{selectedComponent}}</p>
        <hr>

          <component :is="selectedComponent">
            <p>Default content</p>
          </component>


        <!--<AppQuote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful slot</p>
        </AppQuote>-->
      </div>
    </div>
  </div>
</template>

<script>
  import AppQuote from "./components/AppQuote.vue";
  import AppAuthor from "./components/AppAuthor.vue";
  import AppNew from "./components/AppNew.vue";

  export default {
    data() {
      return {
        quoteTitle: "The quote",
        selectedComponent: 'AppQuote'
      }
    },
    components: {
      AppQuote,
      AppAuthor,
      AppNew
    }
  };
</script>

<style>

</style>
