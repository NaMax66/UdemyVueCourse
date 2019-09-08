<template>
  <li class="list-group-item">Server # {{index}}
  </li>
</template>

<script>
  export default {
    name: 'Server',
    props: ['index']
  }
</script>

<style scoped>
  li {
    border: 1px solid blue;
  }
</style>
