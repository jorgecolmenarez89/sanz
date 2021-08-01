import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent implements OnInit {

  constructor() { }

  @Input() history = {numbers: '', result: 0, invalidData: ''};

  ngOnInit(): void {
  }

}
