# 遇到网络问题可以配置镜像加速：https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6
# FROM 表示设置要制作的镜像基于哪个镜像，FROM指令必须是整个Dockerfile的第一个指令，如果指定的镜像不存在默认会自动从Docker Hub上下载。
# 指定我们的基础镜像是node，latest表示版本是最新, 如果要求空间极致，可以选择lts-alpine
# 使用 as 来为某一阶段命名
FROM node:20-slim

ARG PROJECT_DIR

ENV DB_HOST=mysql \
    APP_PORT=7001 \
    PNPM_HOME="/pnpm" \
    PATH="$PNPM_HOME:$PATH" \
    NODE_ENV=development

RUN corepack enable

WORKDIR $PROJECT_DIR
COPY ./ $PROJECT_DIR
RUN chmod +x ./wait-for-it.sh 

# set timezone
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo 'Asia/Shanghai' > /etc/timezone

# Install all dependencies including dev dependencies for ts-node
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# EXPOSE port
EXPOSE $APP_PORT

# Run in development mode with ts-node (skip migration since DB is pre-populated)
ENTRYPOINT ./wait-for-it.sh $DB_HOST:$DB_PORT -- pnpm start
