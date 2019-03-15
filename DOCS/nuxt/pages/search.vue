<template>
  <div>search
    <ul>
      <li v-for='(item, idx) in $store.state.city.list' :key='idx'>
        <h1>{{item}}</h1>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'search',
  data() {
    return {
      list: []
    }
  },
  async asyncData() {
    let {
      status,
      data: { list }
    } = await axios.get('http://localhost:3000/city/list')
    if (status === 200) {
      return {
        list
      }
    }
  }
}
</script>

<style scoped>
div {
  background-color: aqua;
}
</style>
