module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/user': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/user': 'user.json'
        }
      },
      '/list': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/list': 'list.json'
        }
      },
      '/authors': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/authors': 'authors.json'
        }
      }
    }
  }

}
