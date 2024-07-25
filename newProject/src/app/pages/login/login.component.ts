import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignupView: boolean = false;
  constructor() {

  }
  ngOnInit(): void {
    $(document).ready(function () {
      $(".veen .rgstr-btn button").click(function (this: any) {
        $('.veen .wrapper').addClass('move');
        $('.body').css('backgroundImage', "url('../../../assets/images/background_img1.jpg')");
        $('.body').css('background-size', 'cover');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

      });
      $(".veen .login-btn button").click(function (this: any) {
        $('.veen .wrapper').removeClass('move');
        $('.body').css('backgroundImage', "url('../../../assets/images/background_img.jpg')");
        $('.body').css('background-size', 'cover');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
      });
    });
  }

  login(val: String) {
    if (val == 'signup') {
      this.isSignupView = true;
      $(this).prev('label').addClass('active');
    } else {
      this.isSignupView = false;
    }
  }
}
