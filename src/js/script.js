import $ from 'jquery';
import AnimKanpai from './module/AnimKanpai';

let animKanpai = new AnimKanpai();

setTimeout(() => {
  animKanpai.$elm.trigger('start-anim');
}, 2000);