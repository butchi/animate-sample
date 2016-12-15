import $ from 'jquery';
import AnimKanpai from './module/AnimKanpai';

let animKanpai = new AnimKanpai();

animKanpai.$elm.on('end-anim', (evt) => {
  console.log('end anim.');
});

setTimeout(() => {
  animKanpai.$elm.trigger('start-anim');
}, 2000);