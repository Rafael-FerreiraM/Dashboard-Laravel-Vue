module.exports = {
  transpileDependencies: [
    '@vue/cli-service',
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
