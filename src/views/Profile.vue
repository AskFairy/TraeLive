<template>
  <div class="profile">
    <h1>个人中心</h1>
    <div class="profile-content">
      <div class="user-info">
        <div class="avatar">
          <div class="placeholder">头像</div>
        </div>
        <div class="user-details">
          <h2>用户名</h2>
          <p>邮箱: user@example.com</p>
          <p>注册时间: 2024-01-01</p>
          <div class="user-stats">
            <div class="stat">
              <span class="stat-value">128</span>
              <span class="stat-label">关注</span>
            </div>
            <div class="stat">
              <span class="stat-value">1.2K</span>
              <span class="stat-label">粉丝</span>
            </div>
            <div class="stat">
              <span class="stat-value">56</span>
              <span class="stat-label">视频</span>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-tabs">
        <div class="tab">我的视频</div>
        <div class="tab">收藏</div>
        <div class="tab">历史记录</div>
        <div class="tab">设置</div>
      </div>
      <div class="profile-actions">
        <button>编辑资料</button>
        <button>退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.profile {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
}

.profile-content {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar .placeholder {
  color: #999;
  font-size: 14px;
}

.user-details h2 {
  margin: 0 0 10px 0;
  font-size: 24px;
  color: #333;
}

.user-details p {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
}

.user-stats {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #42b983;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.profile-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.tab {
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease;
}

.tab:hover {
  background-color: #42b983;
  color: white;
}

.profile-actions {
  display: flex;
  gap: 10px;
}

.profile-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.profile-actions button:first-child {
  background-color: #42b983;
  color: white;
}

.profile-actions button:first-child:hover {
  background-color: #3aa876;
}

.profile-actions button:last-child {
  background-color: #f0f0f0;
  color: #666;
}

.profile-actions button:last-child:hover {
  background-color: #e0e0e0;
}
</style>
