import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    (function (document) {
      // Cache DOM
      const $goLogin = document.querySelector('#go-login'),
          $goRegister = document.querySelector('#go-register'),
          $container = document.querySelector('.container'),
          $overlayContainer = document.querySelector('.overlay-container');
  
      const _toggleForm = () => {
          if ($container.classList.contains('go-register')) {
              $container.classList.remove('go-register')
              $container.classList.add('go-login')
              $overlayContainer.classList.add('animateWidth')
              $overlayContainer.addEventListener('webkitTransitionEnd', () => $overlayContainer.classList.remove('animateWidth'))
          } else {
              $container.classList.remove('go-login')
              $container.classList.add('go-register')
              $overlayContainer.classList.add('animateWidth')
              $overlayContainer.addEventListener('webkitTransitionEnd', () => $overlayContainer.classList.remove('animateWidth'))
          }
      }
  
  
      $goLogin.addEventListener('click', _toggleForm);
      $goRegister.addEventListener('click', _toggleForm);
  })(document);
  }

}
