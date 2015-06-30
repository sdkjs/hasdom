(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define('hasdom', ['exports'], factory) : factory(global.hasdom = {});
})(this, function (exports) {
	'use strict';

	/*jshint -W079*/

	/**
	 * this is undefined in strict mode
	 * see http://stackoverflow.com/questions/9642491/getting-a-reference-to-the-global-object-in-an-unknown-environment-in-strict-mod
	 */

	/*jshint -W067*/
	var global = (1, eval)('this');
	/*jshint +W067*/

	var document = global.document;

	function isFunction(fn) {
		return typeof fn === 'function';
	}

	function hasDOM() {

		if (document && isFunction(document.createElement)) {
			/**
			 * document.createElement is not reliable
			 * since there is some kind browser you can just create canvas only
			 */
			var node = document.createElement('div');

			/**
			 * node may be an empty object or null (layabox earlier version)
			 */
			if (!node) return false;

			/**
			 * detect logic, create dom and exec query
			 */
			if (isFunction(node.querySelector)) {
				node.innerHTML = '<i></i>';

				var el = node.querySelector('i');

				return !!el && el.tagName === 'I';
			}

			/**
			 * for old browsers such as IE version < 9
			 */
			if (isFunction(node.getElementsByTagName)) {
				var children = node.getElementsByTagName('i');

				return !!children && children.length === 1;
			}
		}

		return false;
	}

	exports.hasDOM = hasDOM;
});
