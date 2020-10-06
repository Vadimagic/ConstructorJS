export class Sidebar {
	constructor(selector) {
		this.$el = document.querySelector(selector)

		this.$el.insertAdjacentHTML('afterbegin', '<h1>Тест</h1>')
	}

	get template() {
		return '<h1>template</h1>'
	}
}