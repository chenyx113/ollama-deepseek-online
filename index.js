// index.js
const { searchWeb } = require('./search');
const { queryDeepSeek } = require('./deepseek');

async function main() {
  const query = process.argv[2];  // 从命令行参数获取查询词
  if (!query) {
    console.log('请提供搜索关键词，如: npm start "量子计算"');
    return;
  }

  // 1. 联网搜索
  const results = await searchWeb(query);
  const searchContent = results.map(r => `${r.title}: ${r.content}`).join('\n');

  // 2. 构造推理提示词
  const prompt = `基于以下搜索结果，回答问题：“${query}”\n\n搜索结果：\n${searchContent}\n\n回答：`;

  // 3. 调用 DeepSeek 推理
  const answer = await queryDeepSeek(prompt);
  console.log('DeepSeek 推理结果:\n', answer);
}

main();
