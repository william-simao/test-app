import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HomeFormComponent } from '../home-form/home-form.component';

@Component({
  selector: 'app-home-form-add',
  templateUrl: './home-form-add.component.html',
  styleUrls: ['./home-form-add.component.css']
})
export class HomeFormAddComponent implements OnInit {
  
  public form: FormGroup = new FormGroup({
    term: new FormControl(''),
  });
  public terms: Array<string> = new Array<string>();

  constructor(
    private _snackBar: MatSnackBar,
    private _form: HomeFormComponent
  ) { }

  ngOnInit() {
    this.terms.push('crowdsourcing');
    this.terms.push('crowd sourcing');
    this.terms.push('crowd');
    this.terms.push('crowdsourced');
    this._form.updateTerms(this.terms);
  }

  public addNewTerm(){
    let newTerm = this.form.controls.term.value;
    if (this.checkTerm(newTerm)) {
      this.terms.push(newTerm);
      this.form.controls.term.setValue('');
    }
    this._form.updateTerms(this.terms);
  }
  
  public removeTerm(term: string): void{
    var index = this.terms.indexOf(term);
    if (index > -1) {
      this.terms.splice(index, 1);
      this.showMessage('The term was removed');
    }
    this._form.updateTerms(this.terms);
  }

  public getTerms(): Array<string>{
    return this.terms;
  }

  //terms section
  private checkTerm(newTerm: string): boolean {
    if (this.checkIsValid(newTerm)) {
      this.showMessage('The term is invalid');
      return false;
    }

    if (this.checkNewTerm(newTerm)) {
      this.showMessage('The term has already been added');
      return false;
    }    

    return true;
  }

  private checkIsValid(newTerm: string): boolean {
    return newTerm.trim() === '' || newTerm === '' || newTerm === null || newTerm === undefined;
  }

  private checkNewTerm(newTerm: string): boolean {
    return this.terms.indexOf(newTerm) > -1;
  }

  //util section
  private showMessage(message: string): void {
    this._snackBar.open(message, 'Ok!', {
      duration: 2000,
    }); 
  }
}
