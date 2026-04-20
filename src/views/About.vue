<template>
  <div class="about">
    <h1>关于我们</h1>
    <div class="about-content">
      <p>我们是一个专注于提供高质量直播视频服务的团队。</p>
      <p>我们的使命是为用户提供最佳的直播观看体验，让每个人都能轻松地分享和观看精彩的直播内容。</p>
      
      <h2>技术栈</h2>
      <ul>
        <li>前端框架: Vue 3</li>
        <li>构建工具: Webpack</li>
        <li>路由管理: Vue Router</li>
        <li>直播技术: WebRTC / RTMP</li>
      </ul>
      
      <h2>联系我们</h2>
      <p>如果您有任何问题或建议，请随时联系我们。</p>
      <p>邮箱: support@livevideo.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
  text-align: center;
}

.about-content {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

h2 {
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 22px;
}

ul {
  margin-left: 20px;
  margin-bottom: 20px;
}

li {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
}
</style>
