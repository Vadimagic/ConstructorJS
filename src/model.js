import image from './assets/completeCourse.png'
import {Title, Image, Columns, Text} from './classes/blocks'

export const model = [
	new Title('Конструктор сайтов на нативном JS', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #8a3fe6, #3fd0e6)',
			color: '#eee',
			'text-align': 'center',
			padding: '1.5rem'
		}
	}),
	new Image(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles : {
			width: '500px',
			height: 'auto'
		},
		alt: 'Это картинка'
	}),
	new Columns([
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae dolores quia, nihil ab sapiente ea saepe vero obcaecati accusamus officia velit incidunt aliquid, reiciendis qui beatae, asperiores sequi aperiam quod. Asperiores, tempore similique repellendus, inventore odit nam id minus, totam labore nihil quia corporis. Itaque distinctio error quidem quod.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis ut asperiores modi fugit, reiciendis atque quaerat pariatur, sit iure unde facilis illum exercitationem expedita ullam possimus obcaecati autem veniam?',
		'Lorem ipsum dolor sit amet. '
	], {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #3a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold'
		}
	}),
	new Text('Here we go with some text', {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight': 'bold'
		}
	})
]