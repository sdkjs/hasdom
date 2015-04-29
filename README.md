# hasdom
Check if a JavaScript environment has a real DOM

Written by ECMAScript 6 with AMD / CommonJS / UMD support
 
Build tools:

> * gulp
> * babel
> * jshint
> * esperanto
> * uglify

# Install and Usage

## Node.js

```js
npm install hasdom
```

```js
var hasDOM = require('../dist/hasdom').hasDOM

console.log('dom support: ')
console.log(hasDOM())
```

## Web Page

```js
require(['hasdom'], function(_) {
	document.write('<h1>dom support: ' + _.hasDOM() + '<h1>')
})
```

## Browser Support

Theoretically all old and modern browsers.




