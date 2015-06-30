# hasdom
Check if a JavaScript environment has a real DOM.

While javascript environment is more complicated than you have ever thought.
When we talk about `environment`, almost everybody knows about web browser and `node.js`.
But if you have heard some game engines based on javascript such as `Egret`, `Cocos2d-js` and `layabox`,
then you will realize that you are misunderstanding this word.

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

## Source Code

Written in ECMAScript 6 with AMD / CommonJS / UMD support
 
## Build Tools

> * gulp
> * babel
> * jshint
> * esperanto
> * uglify
