import { Component , OnInit} from '@angular/core';
import { DialogService } from '../dialog.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css'
})

export class FirstpageComponent {
  authenticated = false;

  constructor(
    private dialogService: DialogService,
    private http: HttpClient
  ) {}

  //Dialog
  openDialog(): void {
    this.dialogService.openStepperDialog();
  }

  //Logout
  logout(): void {
    this.http.post('http://localhost:4000/api/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }

}
