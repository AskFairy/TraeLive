<template>
  <div class="live">
    <h1>直播页面</h1>
    <div class="live-container">
      <div class="video-player">
        <div class="placeholder">
          <p>视频播放器区域</p>
          <p class="small-text">这里将显示直播视频流</p>
        </div>
      </div>
      <div class="chat-section">
        <h3>实时聊天</h3>
        <div class="chat-messages">
          <div class="message">
            <span class="username">用户1:</span>
            <span class="text">大家好！</span>
          </div>
          <div class="message">
            <span class="username">用户2:</span>
            <span class="text">主播什么时候开始？</span>
          </div>
          <div class="message">
            <span class="username">主播:</span>
            <span class="text">马上就开始了，稍等一下！</span>
          </div>
        </div>
        <div class="chat-input">
          <input type="text" placeholder="输入消息..." v-model="message">
          <button @click="sendMessage">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Live',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.message.trim()) {
        alert('发送消息: ' + this.message);
        this.message = '';
      }
    }
  }
}
</script>

<style scoped>
.live {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
  text-align: center;
}

.live-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.video-player {
  flex: 2;
  min-width: 300px;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.placeholder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
}

.placeholder p {
  font-size: 18px;
  margin-bottom: 10px;
}

.small-text {
  font-size: 14px !important;
  color: #aaa;
}

.chat-section {
  flex: 1;
  min-width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 400px;
}

.chat-section h3 {
  padding: 15px;
  border-bottom: 1px solid #eee;
  margin: 0;
}

.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
}

.message {
  margin-bottom: 10px;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.username {
  font-weight: bold;
  color: #42b983;
  margin-right: 5px;
}

.text {
  color: #333;
}

.chat-input {
  display: flex;
  padding: 15px;
  border-top: 1px solid #eee;
  gap: 10px;
}

.chat-input input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.chat-input button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.chat-input button:hover {
  background-color: #3aa876;
}
</style>
