# 简介

## 快速入门
使用 MDUI 最简单的方式是直接从 CDN 引入 CSS 和 JS 文件。

如果你想使用包管理器或下载源文件，请前往 [下载页面](https://www.mdui.org/docs/download) 。

### CSS文件

将以下 `<link>` 标签添加到 `<head>` 标签中，并放置在所有其他样式文件之前。

```html
<link rel="stylesheet" href="https://unpkg.com/mdui@1.0.2/dist/css/mdui.min.css">
```

### JS 文件
将以下 `<script>` 标签添加到页面尾部，且在 `</body>` 标签之前。

```html
<script src="https://unpkg.com/mdui@1.0.2/dist/js/mdui.min.js"></script>
```

MDUI 不依赖任何第三方库，引入了上述两个文件后，便能正常工作了。

## 最简单的页面模板
请确保你的页面遵循了最新的设计和开发标准。即使用 HTML5 doctype 并包含 viewport meta 标签以支持响应式。所以你的页面应该是这样的：

```html
<!doctype html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <meta name="renderer" content="webkit">

    <!-- MDUI CSS -->
    <link rel="stylesheet" href="https://unpkg.com/mdui@1.0.2/dist/css/mdui.min.css">
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- MDUI JavaScript -->
    <script src="https://unpkg.com/mdui@1.0.2/dist/js/mdui.min.js"></script>
  </body>
</html>
```

以上就是一个完整的页面所需要的全部内容。你可以自行在其中添加更多组件和内容，来构建一个网站。
