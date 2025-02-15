// search.js
const axios = require('axios');
const cheerio = require('cheerio');

async function searchWeb(query) {
try {
	// 打印查询词
    console.log('[DEBUG] 搜索关键词:', query);
    const url = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}&t=${Date.now()}`;
    const response = await axios.get(url, {
       headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'zh-CN,zh;q=0.9'
       }
    });
    
    const $ = cheerio.load(response.data);
    const results = [];
    $('.result').each((index, element) => {
      const title = $(element).find('h3').text();
      const content = $(element).find('.content-right_1rh0').text();
      results.push({ title, content });
    });
	// 打印搜索结果数量和前两条内容
    console.log('[DEBUG] 搜索到结果数量:', results.length);
    console.log('[DEBUG] 前两条结果:');
    return results.slice(0, 3);  // 取前3条结果
  } catch (error) {
    console.error('搜索失败:', error);
    return [];
  }
}

module.exports = { searchWeb };  // 正确导出为对象属性
