<template>
<!--https://github.com/pagekit/vue-resource-->

  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>

        <hr>
        <input class="form-control" style="margin-bottom: 2rem" v-model="node" type="text">
        <button class="btn bg-warning" @click="fetchData">Get Data</button>
          <ul style="margin-top: 1rem">
              <li class="list-group-item" v-for="u in users">{{ u .username }} - {{ u.email }}</li>
          </ul>
        <br><br>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: "",
          email: ""
        },

        users: [],
        resource: {},
        node: 'data'
      };
    },
    methods: {
      submit() {
        //added bu vue-resource
        /*this.$http.post("", this.user) //https://vuejs-http-8d08f.firebaseio.com/data.json
          .then(res => {
            console.log(res);
          }, err => {
            console.log(err);
          });*/
        //this.resource.save({}, this.user)
        this.resource.saveAlt({}, this.user)
      },
      fetchData() {
        /*this.$http.get('data.json')
          .then(res => {
            //const data = res.json(); //gives a promise
            return res.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key])
            }
            this.users = resultArray;
          })*/
        this.resource.getData({node: this.node}) //передаем объект где ключ - это шаблон, а значение - нужная нам стрка
          .then(res => {
          //const data = res.json(); //gives a promise
          return res.json();
        })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key])
            }
            this.users = resultArray;
          })
      }
    },
    created() {
      const customActions = {
        //можно добавить несколько методов с разными именами
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET'}
      };
      //настраиваем объект resource
      this.resource = this.$resource('{node}.json', {}, customActions)
    }
  };
</script>

<style>
</style>
