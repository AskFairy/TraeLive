<template>
  <div class="login">
    <h1>登录/注册</h1>
    <div class="form-container">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" placeholder="请输入用户名">
      </div>
      <div class="form-group">
        <label>密码</label>
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="form-actions">
        <button>登录</button>
        <button>注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.login {
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
  text-align: center;
}

.form-container {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.form-actions button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.form-actions button:hover {
  background-color: #3aa876;
}
</style>
