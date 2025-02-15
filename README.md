# ollama-deepseek-online
用ollama在ubuntu安装了deepseek，使用npm脚本，将联网搜索的结果提供给deepseek进行推理

# 环境准备与依赖安装
## Node.js 与 npm
sudo apt update
sudo apt install nodejs npm
## 创建项目目录并初始化
mkdir deepseek-npm && cd deepseek-npm
npm init -y
npm install axios cheerio  # 安装 HTTP 请求和 HTML 解析库

# 验证步骤
## 启动模型服务：
在另外一个窗口启动ollama， ollama run deepseek-r1:7b
## 运行测试命令：
npm start "今天的日期，以及南京今天的天气，如果想今天在南京游玩，推荐以下适合季节和天气的景点"

