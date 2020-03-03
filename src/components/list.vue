<template lang="html">
  <div class="list">
    <ul>
      <li v-for='item of list' :key="item.name">
        {{item.name.trim()}} - {{item.addr}}
      </li>
    </ul>

    <!-- <h2>{{priceTrxt}}</h2> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
      list: [],
      priceTrxt: ''
    }
  },

  methods: {
    async GetList () {
      const {
        data: {
          list,
          price
        }
      } = await axios.get('./list')
      console.log(list, price)
    // this.$data.list = list
    // this.$data.priceTrxt = navigator.language === 'zh-CN' ? `￥${price * rate}` : `${price}`
    }
  },
  mounted () {
    this.GetList()
  }
}
</script>

<style lang="stylus" scoped></style>
