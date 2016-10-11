# encodeuricomponent-tag [![dependencies Status](https://david-dm.org/alanshaw/encodeuricomponent-tag/status.svg)](https://david-dm.org/alanshaw/encodeuricomponent-tag)

[Template literal tag](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) for encoding URI component values.

## Example

```js
const uri = require('encodeuricomponent-tag')
console.log(uri`/category/${'big horses'}?q=${'saddles & bears'}`)
// Output: /category/big%20horses?q=saddles%20%26%20bears
```
