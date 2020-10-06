"use strict"

import {model} from './model'
import './styles/main'

const $site = document.querySelector('#site');

model.forEach(block => {
	$site.insertAdjacentHTML('beforeend', block.toHTML())
})