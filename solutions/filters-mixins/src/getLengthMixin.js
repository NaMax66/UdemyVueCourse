export const getLengthMixin = {
  computed: {
    withLength() {
      return this.myName + " (" + this.myName.length + ")";
    }
  }
};
