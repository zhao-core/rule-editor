# Getting Started

> WYSIWYG rich text editor.

Benefit from the complete self-implementation of cursor and text layout. The underlying rendering can also be rendered by svg, See code：[feature/svg](https://github.com/Hufe921/rule-editor/tree/feature/svg); Or complete pdf drawing with pdfjs,See code：[feature/pdf](https://github.com/Hufe921/rule-editor/tree/feature/pdf).

::: warning
The official only provides the editor core layer npm package, the menu bar or other external tools can refer to the document extension, or directly refer the implementation of [official](https://github.com/Hufe921/rule-editor), See details [demo](https://hufe.club/rule-editor/).
:::

## Features

- Rich text operations (Undo, Redo, Font, Size, Bold, Italic, Superscript, Alignment, Title, List, ...)
- Insert elements (Table, Image, Link, Code Block, Page Break, Math Formula, Date Picker, content Block, ...)
- Print (Based on canvas to picture, pdf drawing)
- Controls (Radio, Text, Checkbox)
- Right-click menu (Internal, Custom)
- Shortcut keys (Internal, Custom)
- Text, Element, Control drag and drop
- Header, Footer, Page Number
- Page Margin
- Watermark
- Pagination

## TODO

- Computational performance
- Control rule
- Table paging
- Out of the box version for vue, react and other frameworks

## Step. 1: Download NPM Package

```sh
npm i @hufe921/rule-editor --save
```

## Step. 2: Prepare Container

```html
<div class="rule-editor"></div>
```

## Step. 3: Instantiate Editor

- Examples that only the body content is included

```javascript
import Editor from '@hufe921/rule-editor'

new Editor(
  document.querySelector('.rule-editor'),
  [
    {
      value: 'Hello World'
    }
  ],
  {}
)
```

- Examples that contain body, header, footer content

```javascript
import Editor from '@hufe921/rule-editor'

new Editor(
  document.querySelector('.rule-editor'),
  {
    header: [
      {
        value: 'Header',
        rowFlex: RowFlex.CENTER
      }
    ],
    main: [
      {
        value: 'Hello World'
      }
    ],
    footer: [
      {
        value: 'rule-editor',
        size: 12
      }
    ]
  },
  {}
)
```

## Step. 4: Configuration Editor

See the next section for details
