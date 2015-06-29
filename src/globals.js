/*jshint -W079*/

/**
 * 严格模式下this为undefined
 * see http://stackoverflow.com/questions/9642491/getting-a-reference-to-the-global-object-in-an-unknown-environment-in-strict-mod
 */

/*jshint -W067*/
var global = (1, eval)('this');
/*jshint +W067*/

var document = global.document

export {global, document}
/*jshint +W079*/
