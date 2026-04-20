<template>
  <div class="home">
    <h1>欢迎来到直播视频应用</h1>
    <p>这是一个基于 Vue 3 + Webpack + Vue Router 的直播视频应用。</p>
    <div class="features">
      <div class="feature">
        <h3>实时直播</h3>
        <p>观看高质量的实时直播内容</p>
      </div>
      <div class="feature">
        <h3>互动聊天</h3>
        <p>与主播和其他观众实时互动</p>
      </div>
      <div class="feature">
        <h3>多平台支持</h3>
        <p>支持多种直播平台和设备</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
}

.features {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.feature {
  flex: 1;
  min-width: 250px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.feature p {
  color: #666;
  font-size: 16px;
  margin-bottom: 0;
}
</style>
