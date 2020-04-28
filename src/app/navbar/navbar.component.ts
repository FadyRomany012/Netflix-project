 import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var main = function() {
      //Variables {
        var year = new Date().getFullYear();
        $('a[href^="http://"]').attr('target', '_blank');
        $('a[href^="https://"]').attr('target', '_blank');
      //}
    
      //NoScript effect {
        $(".noscript").hide();
      //}
      
      //Nav { 
        //$("body").toggleClass("show");
        //$(".show").click(function(e) {
          //e.preventDefault();
          //$("body").toggleClass("show");
        //});  
      //}
    
      //Copyright {
        $(".copyrights").append(year + " Whitelighting © All Rights Reserved.");
      //}
    };
    
    $(document).ready(main);


    
  }

}
