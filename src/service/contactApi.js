// 对接口的封装
const CONTACT_API = {
  getContactList: {
    url: '/contactList',
    method: 'get'
  },
  // 新建联系人
  newContactForm: {
    url: '/contact/new/json',
    method: 'post'
  },
  // 编辑联系人
  editContact: {
    url: '/contact/edit',
    method: 'put'
  },
  // 删除联系人
  delContact: {
    url: '/contact',
    method: 'delete'
  }

}
export default CONTACT_API
