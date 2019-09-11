<template>
  <div class="row">
    <AppQuote v-for="(quote, index) in quotes"
              @click.native="deleteQuote(index)"
    >{{quote}}
    </AppQuote>
  </div>
</template>

<script>
  import AppQuote from "./AppQuote.vue";
  export default {
    props: ['quotes'],
    components: {
      AppQuote
    },
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDeleted', index)
      }
    }
  }
</script>

<style>

</style>
