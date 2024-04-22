import { Component , OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css'
})
export class ForgetpassComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
    });
  }

  submit(): void {
    this.http.post('http://localhost:4000/api/forget', this.form.getRawValue())
    .subscribe(() => this.router.navigate(['/login']));
  }

}
