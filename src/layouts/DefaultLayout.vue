<template>
  <div class="layout-container">
    <header class="layout-header">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">LiveVideo</router-link>
        </div>
        <nav class="header-nav">
          <router-link to="/">首页</router-link>
          <router-link to="/videos">视频列表</router-link>
          <router-link to="/publish">发布视频</router-link>
          <router-link to="/login">登录/注册</router-link>
          <router-link to="/profile">个人中心</router-link>
        </nav>
      </div>
    </header>
    
    <main class="layout-main">
      <div class="main-content">
        <router-view/>
      </div>
    </main>
    
    <footer class="layout-footer">
      <div class="footer-content">
        <p>&copy; 2026 LiveVideo. All rights reserved.</p>
        <p>基于 Vue 3 构建的直播视频应用</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-header {
  background-color: #2c3e50;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.logo a:hover {
  color: #42b983;
}

.header-nav {
  display: flex;
  gap: 30px;
}

.header-nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.header-nav a:hover,
.header-nav a.router-link-exact-active {
  color: #42b983;
}

.layout-main {
  flex: 1;
  background-color: white;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: calc(100vh - 60px - 80px);
}

.layout-footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.footer-content p {
  margin: 5px 0;
  font-size: 14px;
  color: #aaa;
}
</style>
