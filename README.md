### 技术分析

  * 使用webpack构建
  * 预览页面以iframe的形式插入到文档页面中：维护组件库的时候只需要聚焦于组件的开发和预览页面的组织，无需分心维护导航和文档，实现了解耦。因此意味着这是一个基于Vue.js的多页应用
  * 自动生成导航：使用vue-router进行页面切换。每当新建一个预览页面，就会自动在页面上生成对应的导航，并自动维护导航和路由的关系。
  * 自动生成文档：一个预览页面对应一份文档，所以文档理应以README.md的形式存放在对应的预览页面文件夹内。
  * 开发者模式：npm run dev
  * 组件构建打包模式：npm run build
  * 静态页面构建模式：npm run doc

