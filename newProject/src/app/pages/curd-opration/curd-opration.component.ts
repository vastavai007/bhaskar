import { Component } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-curd-opration',
  templateUrl: './curd-opration.component.html',
  styleUrls: ['./curd-opration.component.css']
})
export class CurdOprationComponent {
  tableData: Array<any> = [];
  formdata!: FormGroup
  isEdit: boolean = false;
  editData: any = {};
  constructor(el: ElementRef, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadData();
    this.formInIt();
  }

  formInIt() {
    this.formdata = this.fb.group({
      employee_name: ['',Validators.required],
      employee_salary: ['',Validators.required],
      employee_age: [''],
      profile_image: [''],
    })
  }

  loadData() {
    this.http.get('https://dummy.restapiexample.com/api/v1/employees').subscribe((res: any) => {
      if (res.status == 'success') {
        this.tableData = res.data;
        // alert(res.message)
        console.log(res);
      } else {
        alert(res.message)
      }

    })
  }

  onClickSubmit(formdata: any) {
    if(this.formdata.invalid){
      alert('Please enter requried fields')
    }
    let value = formdata.value
    let payload = {
      "name": value.employee_name,
      "salary": value.employee_salary,
      "age": value.employee_age
    }
    console.log(value.profile_image);
    if (this.isEdit) {
      this.http.put('https://dummy.restapiexample.com/api/v1/update/' + this.editData.id, payload).subscribe((res: any) => {
        if (res.status == 'success') {
          alert(res.message)
          this.loadData();
          this.close();
          console.log(res);
        } else {
          alert(res.message)
        }
      })
    } else {
      this.http.post('https://dummy.restapiexample.com/api/v1/create', payload).subscribe((res: any) => {
        if (res.status == 'success') {
          alert(res.message)
          this.loadData();
          this.close();
          console.log(res);
        } else {
          alert(res.message)
        }
      })
    }

  }

  edit(item: any) {
    this.isEdit = true;
    this.http.get('https://dummy.restapiexample.com/api/v1/employee/' + item.id).subscribe((res: any) => {
      if (res.status == 'success') {
        this.editData = res.data;
        // alert(res.message)
        this.formdata.patchValue({
          employee_name: res.data.employee_name,
          employee_salary: res.data.employee_salary,
          employee_age: res.data.employee_age,
        })

        console.log(res);
      } else {
        alert(res.message)
      }

    })
  }

  delete(item: any) {
    if (confirm('Are you sure you want to delete this record.')) {
      this.http.delete('https://dummy.restapiexample.com/api/v1/delete/' + item.id).subscribe((res: any) => {
        if (res.status == 'success') {
          this.loadData();
          console.log(res);
        } else {
          alert(res.message)
        }

      })
    }

  }

  close() {
    this.formdata.reset();
    this.formInIt();
    this.isEdit = false;
  }
}
