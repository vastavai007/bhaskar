import { Component } from '@angular/core';
import { SharedModule } from './../../shared.module'

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [SharedModule]
})
export class HomeComponent {
  title = 'firstdemo';
  firstname : string='balu';
    isneeded: boolean =false;

    list=[1,2,3,4,5];
    
    logInName='admin';

    ngOnInIt(): void{
    console.log('first attempt');
  }
  chngename(){
    this.firstname='bhaskar'
    this.isneeded=true;
  }
}
