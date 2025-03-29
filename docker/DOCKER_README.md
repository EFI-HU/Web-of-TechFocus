# Docker部署说明

本文档说明如何使用Docker部署该网站项目。

## 前提条件

- 安装 [Docker](https://docs.docker.com/get-docker/)
- 安装 [Docker Compose](https://docs.docker.com/compose/install/)

## 使用Docker部署

### 方法一：使用docker-compose（推荐）

1. 在项目根目录下运行：

```bash
docker-compose up -d
```

2. 网站将在 http://localhost:3000 上运行

### 方法二：手动构建和运行Docker镜像

1. 构建Docker镜像：

```bash
docker build -t enterprise-website .
```

2. 运行Docker容器：

```bash
docker run -p 3000:3000 -d enterprise-website
```

3. 网站将在 http://localhost:3000 上运行

## 查看日志

```bash
# 如果使用docker-compose
docker-compose logs -f

# 如果手动运行容器
docker logs -f <container_id>
```

## 停止服务

```bash
# 如果使用docker-compose
docker-compose down

# 如果手动运行容器
docker stop <container_id>
```

## 开发环境

如果需要在开发环境中使用Docker，可以修改docker-compose.yml文件：

```yaml
version: '3'

services:
  web:
    build: 
      context: .
      dockerfile: Dockerfile.dev  # 开发环境的Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app  # 挂载本地目录到容器，实现代码热更新
      - /app/node_modules  # 避免覆盖容器内的node_modules
    command: npm run dev
```

然后创建`Dockerfile.dev`：

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

然后运行：

```bash
docker-compose -f docker-compose.dev.yml up
``` 