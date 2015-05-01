/*jshint -W079*/
var root = function() {
	return this
}

var global = root() || {}
var document = global.document

export {global, document}
/*jshint +W079*/
