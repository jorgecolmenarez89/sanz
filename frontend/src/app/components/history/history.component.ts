import { Component, OnInit } from '@angular/core';
import { CalcService } from 'src/app/services/calc.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  listHistoy = [];
  constructor(private calcService: CalcService) { }

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ name: 'numbers' }, { name: 'result' }, {name: 'invalidData'}]

  ngOnInit(): void {
    this.getHIstory();
  }

  getHIstory(){
    this.calcService.getHistory().subscribe(data => {
      this.listHistoy = data;
    }, err => {
      console.log(err);
    })
  }

}
