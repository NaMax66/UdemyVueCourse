<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3
                  form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote" @keyup.ctrl.enter="createNew"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3
                  form-group">
        <div class="btn btn-primary" @click.prevent="createNew">Add Quote</div>
      </div>

    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      createNew() {
        if (!this.quote) return;
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }

  }


</script>

<style>

</style>
