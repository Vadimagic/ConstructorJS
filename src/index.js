import {model} from './model'
import {Site} from './classes/site.js'
import './styles/main'
import { Sidebar } from './classes/sidebar';

const site = new Site('#site');

site.render(model)

const sidebar = new Sidebar('#panel')