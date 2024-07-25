import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, FormArray, NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
formdata! :FormGroup;
formvalue: any={};
fromArray: Array<any> = [];
constructor(private fb:FormBuilder){}
ngOnInit(): void {
    console.log('first attempt');
    this.formInIt()
}
formInIt(){
  this.formdata=this.fb.group({
    bloodgroup:'',
    homeplace:'',
    pincode:''
    
  })
 


  }
  onClickSubmit(form:any){
           console.log(form);
           this.formvalue=form;
          this.fromArray.push(form)
           this.formdata.reset();

           
  }
 edit(item:any){
          console.log(item);
          this.formdata.patchValue({
            bloodgroup: item.bloodgroup,
            homeplace: item.homeplace,
            pincode: item.pincode
          })

 }

  }

  
