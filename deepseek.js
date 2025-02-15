// deepseek.js
const axios = require('axios');

async function queryDeepSeek(prompt) {
  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'deepseek-r1:7b',  // 根据实际模型名称调整
      prompt: prompt,
      stream: false  // 非流式输出
    });
    return response.data.response;
  } catch (error) {
    console.error('模型调用失败:', error);
    return null;
  }
}
module.exports = { queryDeepSeek };  // 导出为对象属性
