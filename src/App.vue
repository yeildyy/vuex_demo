<template>
  <div id="app">
    <h1>Welcome vuex</h1>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才能点击" @click="clickOdd">
    <input type="button" value="异步操作" @click="clickAsync">
    <div>现在得数字为:{{count}}</div>
  </div>
</template>

<script>
import{mapGetters,mapActions} from 'vuex'  //vuex提供的两个方法
export default {
  computed:mapGetters([
     'count'
  ]),
  //调用mapActions这个函数（函数内部必须传入数组，是语法规定）
  methods:mapActions([
    'increment',
    'decrement',
    'clickOdd',
    'clickAsync'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
