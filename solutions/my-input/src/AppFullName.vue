<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" style="margin-top: 5rem">
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text"
             id="first-name"
             v-model="firstName"
             @change="changeData">
    </div>

    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text"
             id="last-name"
             v-model="lastName"
             @change="changeData">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: "",
        lastName: ""
      }
    },
    props: ['value'],
    methods: {
      changeData() {
        this.$emit('input', this.firstName + ' ' + this.lastName);
      }
    }
  }
</script>

