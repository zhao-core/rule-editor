<h1 align="center">rule-editor(未完成)</h1>

<p align="center"> a rule editor by canvas/svg</p>

## tips

用自然语言编辑规则的编辑器,最终保存成 AST 语法树;(未完成)

## usage

```bash
npm i @zhao-core/rule-editor --save
```

```html
<div class="rule-editor"></div>
```

```javascript
import Editor from '@zhao-core/rule-editor'

new Editor(document.querySelector('.rule-editor'), {
  main: [
    {
      value: 'Hello World'
    }
  ]
})
```

## next features

## snapshot

![image](./src/assets/snapshots/May-25-2024%2008-41-32.gif)

## install

`yarn`

## dev

`npm run dev`

## build

#### app

`npm run build`

#### lib

`npm run lib`

## 已实现feature

1. 输入文本, 关键字下拉框选择
2. 单选/多选
3. 日期的选择
4. 颜色标注
