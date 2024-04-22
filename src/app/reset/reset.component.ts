import { Component , OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent implements OnInit{
  form: FormGroup = new FormGroup({}); 

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: '',
      password_confirm: ''
    });
  }

  submit(): void {
    const formData = this.form.getRawValue();

    const data = {
      ...formData,
      token: this.route.snapshot.params['token'] 
    };

    this.http.post('http://localhost:4000/api/reset', data)
    .subscribe(() => this.router.navigate(['/login']));
  }
}
