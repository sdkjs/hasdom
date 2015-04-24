(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define('hasdom', ['exports'], factory) : factory(global.hasdom = {});
})(this, function (exports) {
	'use strict';

	/*jshint -W079*/
	var global = typeof window !== 'undefined' ? window : {};
	var document = global.document;

	function isFunction(fn) {
		return typeof fn === 'function';
	}

	function hasDOM() {

		if (document && isFunction(document.createElement) && isFunction(document.querySelector)) {
			var node = document.createElement('div');
			node.innerHTML = '<i></i>';

			var el = node.querySelector('i');

			return el && el.tagName === 'I';
		}

		return false;
	}

	exports.hasDOM = hasDOM;
});