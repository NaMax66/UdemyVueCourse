<template>
  <div>
    <p>Server status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'Normal'
      }
    }
  }
</script>
