<template>
  <div id="app">
    <div v-if="code">{{famous_saying}}--{{famous_name}}</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "app",
    data() {
      return {
        famous_name: '',
        famous_saying: '',
        code:false
      }
    },
    methods: {
      getjuzi() {
        axios({
          url: 'http://localhost:8080/Article',
        }).then(result => {
          let data = result.data.data
          if(data.error_code ==0){
            this.code = true
            this.famous_name = data.famous_name
            this.famous_saying = data.famous_saying;
          }
        }).catch(err => {
          this.code = false
        })
      }
    },
    created() {
      this.getjuzi();
    }
  }
</script>

<style scoped>

</style>
