import image from './assets/completeCourse.png'

export const model = [
	{
		type: 'title', value: 'Конструктор сайтов на нативном JS', options: {
			tag: 'h2',
			styles: {
				background: 'linear-gradient(to right, #8a3fe6, #3fd0e6)',
				color: '#eee',
				'text-align': 'center',
				padding: '1.5rem'
			}
		}
	},
	{
		type: 'image', value: image, options: {
			styles: {
				padding: '2rem 0',
				display: 'flex',
				'justify-content': 'center'
			}
		}
	},
	{
		type: 'columns', value: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae dolores quia, nihil ab sapiente ea saepe vero obcaecati accusamus officia velit incidunt aliquid, reiciendis qui beatae, asperiores sequi aperiam quod. Asperiores, tempore similique repellendus, inventore odit nam id minus, totam labore nihil quia corporis. Itaque distinctio error quidem quod.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis ut asperiores modi fugit, reiciendis atque quaerat pariatur, sit iure unde facilis illum exercitationem expedita ullam possimus obcaecati autem veniam?',
			'Lorem ipsum dolor sit amet. '
		], options: {
			styles: {
				background: 'linear-gradient(to bottom, #8e2de2, #3a00e0)',
				padding: '2rem',
				color: '#fff',
				'font-weight': 'bold'
			}
		}
	},
	{
		type: 'text', value: 'Here we go with some text', options: {
			styles: {
				background: 'linear-gradient(to left, #f2994a, #f2c94c)',
				padding: '1rem',
				'font-weight': 'bold'
			}
		}
	},
]