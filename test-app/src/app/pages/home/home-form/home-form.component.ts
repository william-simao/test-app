import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  public terms: Array<string> = new Array<string>();
  public baseString: string = '';

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  public updateTerms(terms: Array<string>): void {
    this.terms = terms;    
  }

  public updateBaseString(baseString: string): void {
    this.baseString = baseString;
  }

}