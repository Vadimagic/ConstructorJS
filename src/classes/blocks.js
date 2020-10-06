import {row, col, css} from "../utils"

export class Block {
	constructor(type, value, options) {
		this.type = type
		this.value = value
		this.options = options
	}

	toHTML() {
		throw new Error('Метод toHTML должен быть реализован!')
	}
}

export class Title extends Block {
	constructor(value, options) {
		super('title', value, options)
	}

	toHTML() {
		const {tag = 'h1', styles} = this.options
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
	}
}

export class Image extends Block {
	constructor(value, options) {
		super('image', value, options)
	}

	toHTML() {
		const {styles, imageStyles : is, alt = ""} = this.options
		return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"`, css(styles))
	}
}

export class Columns extends Block {
	constructor(value, options) {
		super('columns', value, options)
	}

	toHTML() {
		const {styles} = this.options
		const html = this.value.map(col).join("") // e=> col(e) == col
		return row(html, css(styles))
	}
}

export class Text extends Block {
	constructor(value, options) {
		super('text', value, options)
	}

	toHTML() {
		const {styles} = this.options
		return row(col(`<p>${this.value}</p>`), css(styles))
	}
}
