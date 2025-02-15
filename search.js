// search.js
const axios = require('axios');
const cheerio = require('cheerio');

async function searchWeb(query) {
  try {
    const response = await axios.get(`https://www.baidu.com/s?wd=${encodeURIComponent(query)}`);
    const $ = cheerio.load(response.data);
    const results = [];
    $('.result').each((index, element) => {
      const title = $(element).find('h3').text();
      const content = $(element).find('.content-right_1rh0').text();
      results.push({ title, content });
    });
    return results.slice(0, 3);  // 取前3条结果
  } catch (error) {
    console.error('搜索失败:', error);
    return [];
  }
}

module.exports = { searchWeb };  // 正确导出为对象属性
