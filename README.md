# ZheQi-Blog

使用了create t3 app 搭建个人博客

1. 拉取项目后新建.env文件把.env.example的内容复制进去
2. 修改prisma中的mysql为sqlite
3. 执行pnpm install
4. 执行npx prisma db push
5. 执行pnpm dev

执行npx prisma studio查看数据库

项目直接扔netlify就行了，识别的出来的

项目效果预览：https://zheqi.netlify.app

每天都会更新，nuxt3博客已经停止更新我发现nextjs挑战更大一点
