#
安装步骤：
 1、npm install -g @vue/cli@3.11.0
 2、npm install -g @vue/cli-service-global@3.12.0
 3\create project :vue create vue-lesson
 4、eslint --init
 4\npm run serve
 5\ http-server .

 6、mkdir mock 在项目中创建mock文件
 7、touch mock/user.json 在mock中创建user.json文件
 8、cd..该指令为回到上一个目录
 9、在vue.config.js中配置需要mock的json文件
 10、在mock文件下启动http-server . 才能执行本地服务器

 vue-lesson

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
