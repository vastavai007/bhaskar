import { Component } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-partice',
  templateUrl: './partice.component.html',
  styleUrls: ['./partice.component.css']
})
export class ParticeComponent {
  firstname: string = 'Bhaskar';
  isNeeded: boolean = false;
  list = [1,2,3,4,5];
  logInName = ''; 
  Fruits = ["mango","apple","orange","grapes"]; 
  inputValue :string= ''
  formdata!: FormGroup;
  formvalue: any
  fromArray: Array<any> = [];
  httpResponce: any;
  constructor(el: ElementRef, private router: Router, private route: ActivatedRoute, private fb: FormBuilder,private http: HttpClient
  ) {
    el.nativeElement.style.fontSize = '10px';
  }

  ngOnInit(): void {
    console.log('first attempt');
    this.formInIt();
  }


  formInIt() {
    this.formdata = this.fb.group({
      name: [''],
      lastname: [''],
      mobilenumber: ['']
    })
  }

  onClickSubmit(formdata: any) {
    this.formvalue = formdata.value;
    this.fromArray.push(this.formvalue);
    this.formdata.reset();
  }

  edit(item:any){
    this.formdata.patchValue({
      name: item.name,
      lastname: item.lastname,
      mobilenumber: item.mobilenumber
    })
  }

  chnageName() {
    this.inputValue = '';
    this.firstname = "Balu Prasana"
    this.isNeeded = true;
  }

  inputMethod(event:any){
    this.firstname = event.target.value;
    // this.firstname = fname
  }
  loadData() {
    this.http.get('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts').subscribe((res: any) => {
      console.log(res);
      this.httpResponce = res;
    })
  }

  loginapi() {
    let payload = {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }
    this.http.post('https://reqres.in/api/register',payload).subscribe((responce:any)=>{
      console.log(responce);
      
    })
}



}
