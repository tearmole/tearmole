# tearmole Â· Hexo 主题

极简个人博客主题，原生«泪痣»风格：低饱和深灰/墨蓝配色

## 文件结构

```
tearmole-hexo-theme/
  _config.yml          # 主题配置
  README.md
  layout/
    layout.ejs         # 布局框架（导航/页脚/头部）
    index.ejs          # 首页文章列表
    post.ejs           # 单篇文章页
    archive.ejs        # 归档页
  source/
    css/
      style.css        # 全部样式
    js/
      scripts.js       # 轻交互脚本
```

## 安装

1. 将本文件夹复制到 Hexo 站点 `themes/` 目录下
2. 修改 Hexo 站点 `_config.yml`：

   ```yaml
   theme: tearmole-hexo-theme
   ```

3. 创建 `source/about/index.md`（关于页），示例：

   ```markdown
   ---
   title: 关于
   layout: page
   ---
   我叫刘欣然，平常喜欢读书，有数据处理相关经验。
   ```

## 写文章

在 Hexo 站点 `source/_posts/` 目录下新建 `.md` 文件：

```markdown
---
title: 读《地下室手记》
date: 2026-06-28
tags: [读书, 随笔]
categories: 读书
---
断断续续读了两个月。不是这本书难读，是读几页就得放下缓一缓。

地下室人那种“我什么都知道，但我偏不”的状态，太熟悉了。熟悉到不舒服。
```

运行 `hexo generate` 再直接 `hexo serve` 预览。

## 自定义配置

`_config.yml` 中可修改以下属性：

| 属性 | 说明 |
|----------|------|
| `site_name` | 站点名，显示在导航栏、标题和页脚 |
| `subtitle` | 首页个人简介 |
| `footer_line` | 页脚短句 |
| `motto` | 关于页座右铭 |
| `gitee_url` | 社交链接 |
| `nav` | 导航链接 |

## 备注

- 没有第三方依赖，不用 `jQuery` 或其他大型库
- 夜间模式支持，偏好存入 `localStorage`
- 样式全在 `style.css` 单文件，方便后续修改
