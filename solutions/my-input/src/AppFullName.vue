<template>
  <div>
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text"
             id="first-name"
             :value="firstName"
             @input="changeData(true, $event)">
    </div>

    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text"
             id="last-name"
             :value="lastName"
             @input="changeData(false, $event)">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    computed: {
      firstName() {
        //default value will be '' if undefined
        return this.value.split(' ')[0] || ''
      },
      lastName() {
        return this.value.split(' ')[1] || ''
      }
    },
    methods: {
      changeData(isFirst, event) {
        let name = '';
        if (isFirst) {
          name = event.target.value + ' ' + this.lastName;
        }
        else {
          name = this.firstName + ' ' + event.target.value;
        }
        this.value = name;
        this.$emit('input', this.value);
      }
    }
  }
</script>

