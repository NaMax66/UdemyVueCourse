<template>
  <div class="container">
    <form>
      <div class="row">
        <!-- Exercise 3 -->
        <AppFullName v-if="submitted"
                    v-model="fullName"/>

        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" v-if="!submitted">

          <!-- Exercise 1 -->
          <h3>Please enter your info</h3>
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input type="text"
                   id="first-name"
                   v-model="firstName">

          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input type="text"
                   id="last-name"
                   v-model="lastName">
          </div>
          <div class="form-group">
            <label for="mail">E-Mail</label>
            <input type="text"
                   id="mail"
                   v-model="email">
          </div>
          <div class="form-group">
            <label for="pass">Password</label>
            <input type="text"
                   id="pass"
                   v-model="password">
          </div>
          <div class="form-group">
            <h4>Store Data?</h4>
            <label for="yes"> Yes
              <input type="radio" id="yes" v-model="isDataStored" value="yes">
            </label>
            <label for="no"> No
              <input type="radio" id="no" v-model="isDataStored" value="no">
            </label>
          </div>
        </div>

      </div>
    </form>

    <!-- Exercise 2 -->
    <div class="text-right" style="margin-top: 2rem">
      <button
          class="btn btn-primary right"
          @click.prevent="!submitted ? submitted = true : submitted = false">
        Submit!
      </button>
    </div>

    <hr>
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{firstName}} {{lastName}}</p>
            <p>Mail: {{email}}</p>
            <p>Password: {{password}}</p>
            <p>Store in Database?: {{isDataStored}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppFullName from "./AppFullName.vue";
  export default {
    components: {
      AppFullName
    },
    watch: {
      fullName(){
        [this.firstName, this.lastName] = this.fullName.split(' ');
      }
    },
    data() {
      return {
        isDataStored: "no",
        submitted: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        fullName: ''
      };
    }
  };
</script>

<style>
</style>
