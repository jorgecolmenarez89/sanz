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
