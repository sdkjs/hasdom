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

		if (document && isFunction(document.createElement)) {
			var node = document.createElement('div');
			node.innerHTML = '<i></i>';

			/**
			 * for modern browsers such as IE version >= 9, chrome, firefox
			 */
			if (isFunction(node.querySelector)) {
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
