import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,FormControl, FormArray, NgForm} from '@angular/forms';

@Component({
  selector: 'app-client',
  standalone: true,

  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
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
