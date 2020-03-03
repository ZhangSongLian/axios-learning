<template>
    <div id="content">
      <!-- 联系人列表 -->
        <van-contact-list
          :list="list"
          @add="onAdd"
          @edit="onEdit"
        />

      <!-- 联系人编辑 -->
      <van-popup v-model="showEdit" position="bottom">
        <van-contact-edit
          :contact-info="editingContact"
          :is-edit="isEdit"
          @save="onSave"
          @delete="onDelete"
        />
      </van-popup>
    </div>
</template>

<script>
import { Toast, ContactList, ContactEdit, Popup } from 'vant'
import axios from 'axios'
export default {
  name: 'contactList',
  components: {
    [Toast.name]: Toast,
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup

  },
  data () {
    return {
      editingContact: {},
      showEdit: false,
      isEdit: false,
      list: [], // 初始化列表
      instance: null // axios 实例

    }
  },
  created () {
    this.instance = axios.create({
      baseURL: 'http://localhost:9000/api',
      timeout: 1000
    })
    this.getList()
  },
  methods: {
    // 获取联系人列表
    getList () {
      this.instance.get('/contactList').then(res => {
        console.log(res)
        if (res.data) {
          this.list = res.data.data
        }
      }).catch(err => {
        console.log(err)
        Toast('请求失败,请稍后重试')
      })
    },
    // 添加联系人
    onAdd () {
      this.editingContact = { id: this.list.length }
      this.isEdit = false
      this.showEdit = true
    },

    // 编辑联系人
    onEdit (item) {
      this.isEdit = true
      this.showEdit = true
      this.editingContact = item
    },

    // 保存联系人
    onSave (info) {
      this.showEdit = false
      this.showList = false

      if (this.isEdit) {
        // 编辑保存
        // this.list = this.list.map(item => item.id === info.id ? info : item)
        this.instance.put('/contact/edit', info).then(res => {
          if (res.data.code === 200) {
            Toast('编辑成功')
            // 成功后将弹窗关掉
            this.showEdit = false
            // 新建成功后刷新下联系人列表
            this.getList()
          }
        }).catch(err => {
          console.log(err)
          Toast('请求失败,请稍后重试')
        })
      } else {
        // 新建保存
        // this.list.push(info)
        this.instance.post('/contact/new/json', info).then(res => {
          console.log(res)
          if (res.data.code === 200) {
            Toast('新建成功')
            // 成功后将弹窗关掉
            this.showEdit = false
            // 新建成功后刷新下联系人列表
            this.getList()
          }
        }).catch(err => {
          console.log(err)
          Toast('请求失败,请稍后重试')
        })
      }
      this.chosenContactId = info.id
    },

    // 删除联系人
    onDelete (info) {
      // this.showEdit = false
      // this.list = this.list.filter(item => item.id !== info.id)
      // if (this.chosenContactId === info.id) {
      //   this.chosenContactId = null
      // }
      this.instance.delete('/contact', {
        // 将参数拼接在url上
        params: {
          id: info.id
        }
      }).then(res => {
        console.log(res)
        Toast('删除成功')
        this.showEdit = false
        this.getList()
      }).catch(err => {
        console.log(err)
        Toast('请求失败,请稍后重试')
      })
    }
  }

}
</script>

<style>
  .van-popup--bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90%;
}
</style>
