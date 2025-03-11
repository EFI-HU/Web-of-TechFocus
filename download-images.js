const https = require('https');
const fs = require('fs');
const path = require('path');

// 确保news目录存在
const newsDir = path.join(__dirname, 'public', 'news');
if (!fs.existsSync(newsDir)) {
  fs.mkdirSync(newsDir, { recursive: true });
  console.log('Created news directory');
}

// 图片URL和目标文件名
const images = [
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    filename: 'website-launch.jpg',
    description: '网站发布新闻图片'
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    filename: 'smart-freight.jpg',
    description: '智能货运新闻图片'
  },
  {
    url: 'https://images.unsplash.com/photo-1535655685871-dc8158ff167e?q=80&w=1200&auto=format&fit=crop',
    filename: 'electric-bus.jpg',
    description: '电动巴士新闻图片'
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    filename: 'company-launch.jpg',
    description: '公司成立新闻图片'
  }
];

// 下载图片函数
function downloadImage(url, filename, description) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(newsDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${description} to ${filePath}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // 删除不完整的文件
        console.error(`Error downloading ${description}: ${err.message}`);
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // 删除不完整的文件
      console.error(`Error downloading ${description}: ${err.message}`);
      reject(err);
    });
  });
}

// 下载所有图片
async function downloadAllImages() {
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename, image.description);
    } catch (error) {
      console.error(`Failed to download ${image.filename}: ${error.message}`);
    }
  }
  console.log('All downloads completed!');
}

downloadAllImages(); 