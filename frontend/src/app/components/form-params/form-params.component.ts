import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms';
import { CalcService } from 'src/app/services/calc.service';

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
  
  constructor( private fb: FormBuilder, private calcService: CalcService ) {
    this.form = this.fb.group({
      parameters: this.fb.array([
        this.fb.group({parammeter: ['', Validators.required]})
      ])
    });
  }

  ngOnInit(): void {}

  saveParameters() {
    const parametersValue = this.form.value;
    const parametersFormatArray = [];
    parametersValue.parameters.map(item => {
      parametersFormatArray.push(item.parammeter);
    }); 
    console.log(parametersFormatArray);
    this.calcService.saveParams({numbers: parametersFormatArray}).subscribe(data => {
      console.log(data);
      this.textoAlert = `Parámetros enviados: ${data.numbers}  Suma de parámetros: ${data.result} Parámetros que no se puden sumar: ${data.invalidData}`;
      this.colorAlert = 'alert-success';
      this.showAlert = true;
      this.form.reset();
    }, err => {
      console.log('error', err);
      this.textoAlert = 'Error al intentar enviar los párametros.';
      this.colorAlert = 'alert-danger';
      this.showAlert = true;
    })
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
