<template>
  <div class="video-list">
    <h1>视频列表</h1>
    <div class="video-grid">
      <div class="video-card" v-for="i in 6" :key="i">
        <div class="video-thumbnail">
          <div class="placeholder">视频缩略图</div>
        </div>
        <div class="video-info">
          <h3>视频标题 {{ i }}</h3>
          <p>视频描述，简介视频的主要内容...</p>
          <div class="video-meta">
            <span>播放量: 1.2万</span>
            <span>发布时间: 2天前</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoList'
}
</script>

<style scoped>
.video-list {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.video-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.video-card:hover {
  transform: translateY(-5px);
}

.video-thumbnail {
  aspect-ratio: 16/9;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-thumbnail .placeholder {
  color: #999;
  font-size: 14px;
}

.video-info {
  padding: 15px;
}

.video-info h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
}

.video-info p {
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
}
</style>
