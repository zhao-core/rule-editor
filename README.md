<h1 align="center">rule-editor</h1>

<p align="center"> a rich text editor by canvas/svg</p>

## tips

1. [docs](https://hufe.club/rule-editor-docs/)
2. [rule-editor-plugin](https://github.com/zhao-core/rule-editor-plugin)

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

1. table paging
2. improve performance
3. control rules
4. [CRDT](https://github.com/Hufe921/rule-editor/tree/feature/CRDT)

## snapshot

![image](./src/assets/snapshots/main_v0.9.35.png)

## install

`yarn`

## dev

`npm run dev`

## build

#### app

`npm run build`

#### lib

`npm run lib`
