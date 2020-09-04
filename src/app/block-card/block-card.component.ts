import { Component, OnInit, Input } from '@angular/core';
import { BlockData } from '../block-data';

@Component({
  selector: 'app-block-card',
  templateUrl: './block-card.component.html',
  styleUrls: ['./block-card.component.css']
})
export class BlockCardComponent implements OnInit {

  @Input() blockData: BlockData;
  myInput: any;
  constructor() { }

  ngOnInit() {
  }

}