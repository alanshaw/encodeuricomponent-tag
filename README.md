# encodeuricomponent-tag

[Template literal tag](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) for encoding URI component values.

## Example

```js
const encode = require('encodeuricomponent-tag')
console.log(encode`/category/${'big horses'}?q=${'saddles & bears'}`)
// Output: /category/big%20horses?q=saddles%20%26%20bears
```