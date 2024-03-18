import ScrollAnima from './modules/scroll-anima.js';
import menuAtivo from './modules/menu-ativo.js';

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

menuAtivo();
