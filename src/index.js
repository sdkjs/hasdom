import {document} from './globals.js'
import isFunction from './utils.js'

/**
 * document.createElement is not reliable
 * some custom WebView without real dom just use canvas via document.createElement
 *
 * @returns {Boolean}
 */
export function hasDOM() {

	if (document && isFunction(document.createElement)) {
		var node = document.createElement('div')

		/**
		 * for modern browsers such as IE version >= 9, chrome, firefox
		 */
		if (node && isFunction(node.querySelector)) {
			node.innerHTML = '<i></i>'

			var el = node.querySelector('i')

			return !!el && el.tagName === 'I'
		}

		/**
		 * for old browsers such as IE version < 9
		 */
		if (isFunction(node.getElementsByTagName)) {
			var children = node.getElementsByTagName('i')

			return !!children && children.length === 1
		}
	}

	return false
}
