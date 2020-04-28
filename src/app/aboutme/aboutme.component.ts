import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function() {
      $('.material-card > .mc-btn-action').click(function () {
          var card = $(this).parent('.material-card');
          var icon = $(this).children('i');
          icon.addClass('fa-spin-fast');

          if (card.hasClass('mc-active')) {
              card.removeClass('mc-active');

              window.setTimeout(function() {
                  icon
                      .removeClass('fa-arrow-left')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-bars');

              }, 800);
          } else {
              card.addClass('mc-active');

              window.setTimeout(function() {
                  icon
                      .removeClass('fa-bars')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-arrow-left');

              }, 800);
          }
      });
  });




  $('.menu-icon-toggle').on('click', function(e) {
    $('body').toggleClass('open');
  
    e.preventDefault();
  });




  var items = document.querySelectorAll('.circle a');

for(var i = 0, l = items.length; i < l; i++) {
  (items[i] as HTMLElement).style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
  
  (items[i]as HTMLElement).style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
}

(document.querySelector('.menu-button') as HTMLElement).onclick = function(e) {
   e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
}

  }

}
