export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(el => {
        return el.match(this.filterText);
      })
    }
  },
  created() {
    /*access to component's name*/
    console.log(this.$options.name + ' Created');
    console.log('Inside mixin');
  }
};


