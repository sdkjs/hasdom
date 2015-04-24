import {document} from './globals.js'
import isFunction from './utils.js'

/**
 * we should check document.querySelector
 * document.createElement is not reliable
 * some custom WebView without real dom just use canvas via document.createElement
 *
 * @returns {Boolean}
 */
export function hasDOM() {

	if (document && isFunction(document.createElement) && isFunction(document.querySelector)) {
		var node = document.createElement('div')
		node.innerHTML = '<i></i>'

		var el = node.querySelector('i')

		return el && el.tagName === 'I'
	}

	return false
}
