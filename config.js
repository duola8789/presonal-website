/**
 * Created by zh on 2019/1/26.
 */
const path = require('path');

const config = {
  port: 8000, // 端口
  publicPath: path.join(__dirname, ''), // 静态资源目录
  index: 'index.html' // 资源的index文件
};

module.exports = config;
