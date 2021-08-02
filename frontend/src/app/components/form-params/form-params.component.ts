import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms';
import { CalcService } from 'src/app/services/calc.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CalcActions from '../../store/actions/cacl.actions';
import { Observable } from 'rxjs';
import { Calc } from '../../models/calc.model';

@Component({
  selector: 'app-form-params',
  templateUrl: './form-params.component.html',
  styleUrls: ['./form-params.component.scss']
})
export class FormParamsComponent implements OnInit {

  colorAlert = 'alert-danger';
  textoAlert = '';
  showAlert = false; 
  form: FormGroup; 
  calcs: Observable<Calc[]>; 

  constructor( 
    private fb: FormBuilder, 
    private calcService: CalcService,
    private store: Store<AppState> 
  ) {
    this.form = this.fb.group({
      parameters: this.fb.array([
        this.fb.group({parammeter: ['', Validators.required]})
      ])
    });
    this.calcs = this.store.select('calcs');
  }

  ngOnInit(): void {
    console.log(this.calcs)
  }

  saveParameters() {
    const parametersValue = this.form.value;
    const parametersFormatArray = [];
    parametersValue.parameters.map(item => {
      parametersFormatArray.push(item.parammeter);
    }); 
    this.calcService.saveParams({numbers: parametersFormatArray}).subscribe(data => {
      this.buildMessage(true, data);
      this.store.dispatch(new CalcActions.AddCalc(
        { numbers: data.numbers, result: data.result, invalidData: data.invalidData }
      ));
      this.form.reset();
    }, err => {
      this.buildMessage(false, err);
    })
  }

  buildMessage(success, data){
    if(success){
      this.textoAlert = `Parámetros enviados: ${data.numbers}  Suma de parámetros: ${data.result} Parámetros que no se puden sumar: ${data.invalidData}`;
      this.colorAlert = 'alert-success';
    } else {
      this.textoAlert = 'Error al intentar enviar los párametros.';
      this.colorAlert = 'alert-danger';
    }
    this.showAlert = true;
  }

  get parameters() {
    return this.form.controls["parameters"] as FormArray;
  } 

  addField() {
    const paramsForm = this.fb.group({
      parammeter: ['', Validators.required]
    });
    this.parameters.push(paramsForm);
  }

  deleteField(index: number) {
    this.parameters.removeAt(index);
  }

}
