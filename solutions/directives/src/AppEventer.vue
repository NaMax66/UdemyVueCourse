<template>
  <div class="table-bordered">
    <slot></slot>
    <button class="btn btn-warning" @click="$emit('some-event', msg)">Eventer</button>
    <input type="text" v-model="msg">
    Event production factory
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'hey!'
      }
    }
  }
</script>
