<template>
  <div class="video-publish">
    <h1>视频发布</h1>
    <div class="publish-form">
      <div class="form-group">
        <label>视频标题</label>
        <input type="text" placeholder="请输入视频标题">
      </div>
      <div class="form-group">
        <label>视频分类</label>
        <select>
          <option value="">请选择分类</option>
          <option value="entertainment">娱乐</option>
          <option value="education">教育</option>
          <option value="tech">科技</option>
          <option value="game">游戏</option>
        </select>
      </div>
      <div class="form-group">
        <label>视频描述</label>
        <textarea placeholder="请输入视频描述" rows="5"></textarea>
      </div>
      <div class="form-group">
        <label>视频上传</label>
        <div class="upload-area">
          <div class="placeholder">
            <p>点击或拖拽视频文件到此处上传</p>
            <p class="small-text">支持 MP4、AVI、MOV 等格式，文件大小不超过 500MB</p>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>封面图片</label>
        <div class="upload-area">
          <div class="placeholder">
            <p>点击或拖拽图片文件到此处上传</p>
            <p class="small-text">支持 JPG、PNG 等格式，推荐尺寸 16:9</p>
          </div>
        </div>
      </div>
      <div class="form-actions">
        <button class="cancel-btn">取消</button>
        <button class="publish-btn">发布视频</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPublish'
}
</script>

<style scoped>
.video-publish {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
}

.publish-form {
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

.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
}

.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.upload-area:hover {
  border-color: #42b983;
}

.upload-area .placeholder p {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #666;
}

.upload-area .placeholder .small-text {
  font-size: 12px;
  color: #999;
}

.form-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 30px;
}

.form-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.cancel-btn {
  background-color: #f0f0f0;
  color: #666;
}

.cancel-btn:hover {
  background-color: #e0e0e0;
}

.publish-btn {
  background-color: #42b983;
  color: white;
}

.publish-btn:hover {
  background-color: #3aa876;
}
</style>
