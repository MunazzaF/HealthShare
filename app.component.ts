import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  patient_name = '';
  /* database links to the .ts */
  displayedColumns: string[] = ['LastName', 'FirstName', 'HealthNumber', 'AvgBP', 'AvgHeartRate', 'AvgSteps'];
  dataSource: any[] = [];
  events: any[] = [];

  constructor(private server: ServerService) { }

  ngOnInit() {
    this.getEvents();
  } /*gets called every time the component loads */

  private getEvents() { console.log("hello");
    this.server.getEvents().then((response: any) => {
      console.log('Response', response);
      this.dataSource = response;
      return this.dataSource;
    });
  }

}



