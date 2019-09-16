export const lengthAwareMixin = {
    computed: {
        withLength() {
            return this.myName + ' (' + this.myName.length + ')';
        }
    }
};
