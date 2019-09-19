<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks {{ stringCounter }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        /* props: ['counter']*/
        /*computed: {
            /!*counter() {
                //return this.$store.state.counter * 2
                return this.$store.getters.doubleCounter
            },
            clicks() {
                return this.$store.getters.stringCounter
            }*!/


        },*/

        /*mapGetters is an object, so we should us the spread operator to add another props
        * but we need to install babel-preset-stage-2*/
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),
            myOwn() {

            }
        }
    }
</script>
