import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalcService } from 'src/app/services/calc.service';

@Component({
  selector: 'app-form-params',
  templateUrl: './form-params.component.html',
  styleUrls: ['./form-params.component.scss']
})
export class FormParamsComponent implements OnInit {

  formCalc: FormGroup;
  constructor( private fb: FormBuilder, private calcService: CalcService ) {
    this.formCalc= this.fb.group({
      parameters: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  saveParameters() {
    const parametersValue  = this.formCalc.get('parameters')?.value //capturo el valor del input
    const parametersWithoutCommas = parametersValue.replace(/^[, ]+|[, ]+$|[, ]+/g, " ").trim(); //remplazo , por espacios
    let parametersFormatArray = parametersWithoutCommas.split(" "); //convierto en un arreglo separando por espacios
    this.calcService.saveParams(parametersFormatArray).subscribe(data => {
      console.log(data);
    }, err => {
      console.log('error', err);
    })
  }

}
