<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName()">Reset($emit)</button>
        <button @click="resetFn()">Reset</button>
    </div>
</template>

<script>
    import { eventBus } from "../main";

    export default {
        props: {
            myName: {
                type: String,
                /*we can use this component if it receives data*/
                /*required: true,*/
                default: 'Max'
            },
            resetFn: Function,
            userAge: Number

        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("")
            },
            resetName() {
                this.$emit('nameWasReset', "Max")
            }
        },
        created() {
            //add listener
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
