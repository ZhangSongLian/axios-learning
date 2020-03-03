import Vue from 'vue'

//创建自定义指令
Vue.directive('make-red',{
    inserted (el) {
        el.style.color = 'red'
    }
})