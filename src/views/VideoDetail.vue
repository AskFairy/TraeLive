<template>
  <div class="video-detail">
    <h1>视频详情</h1>
    <div class="video-player">
      <div class="placeholder">
        <p>视频播放器区域</p>
        <p class="small-text">这里将显示视频内容</p>
      </div>
    </div>
    <div class="video-info">
      <h2>视频标题</h2>
      <div class="video-meta">
        <span>播放量: 1.2万</span>
        <span>发布时间: 2024-01-01</span>
        <span>作者: 用户名</span>
      </div>
      <div class="video-description">
        <h3>视频简介</h3>
        <p>这是视频的详细描述内容，介绍视频的主要内容和特点。这里可以包含更多关于视频的信息，帮助用户更好地了解视频内容。</p>
      </div>
      <div class="video-actions">
        <button>点赞</button>
        <button>收藏</button>
        <button>分享</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail'
}
</script>

<style scoped>
.video-detail {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
  margin-bottom: 20px;
}

.video-player {
  aspect-ratio: 16/9;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.video-player .placeholder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
}

.video-player .placeholder p {
  font-size: 18px;
  margin-bottom: 10px;
}

.video-player .placeholder .small-text {
  font-size: 14px;
  color: #aaa;
}

.video-info {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.video-info h2 {
  margin: 0 0 10px 0;
  font-size: 20px;
  color: #333;
}

.video-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
}

.video-description h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
}

.video-description p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.video-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.video-actions button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.video-actions button:hover {
  background-color: #3aa876;
}
</style>
