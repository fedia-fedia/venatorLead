import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  form: FormGroup = new FormGroup({}); 

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      companyname: ''
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:4000/api/register', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));
  }
  
}
