# jquery.autocompletion.js


Auto complete the input with left text selected

## Usage

Maybe it's not convenient enough to use, but it performs well. You'd better have a look at this [jsfiddle demo](http://jsfiddle.net/Witcher42/dYCxh/) if you still don't know how to use after reading codes below.

css: 

```css
#input,#left {
    border: 1px dotted #000;
    outline: 0;
    position: absolute;
    left: 100px;
    float: left;
}

#input {
    background-color: #fff;
}

#left {
    background-color: #ccc;
}
```

html:

```html
<span id="left"></span>
<span contenteditable=true id="input"></span>
```

javascript:

```javascript
(function() {
  var $left = $('#left'),
      $input = $('#input');

  $input.autocomplete({
    target: $left,
    items: [
      'item1',
      'item2',
      'thisisasentence',
      'showmethemoney',
      '这是一段中文'
    ]
  });
});
```
    
## License

The MIT License (MIT)

Copyright (c) 2013 Witcher42

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.