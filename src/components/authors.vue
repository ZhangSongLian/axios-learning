<template lang="html">
    <div class="list">
        <h2>Authors</h2>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'authors',
  data () {
    return {
      authors: {}
    }
  },
  async mounted () {
    const {
      data: {
        allAuthors
      }
    } = await axios.get('./authors')
    console.log(allAuthors)
    // 获取到了数据，对数据进行相应的操作
  }
}
</script>

<style scoped></style>
