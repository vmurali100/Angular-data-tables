import {Component, OnInit} from '@angular/core';
import {DataTableResource} from 'mdata-table';
import persons from '../../resource/data-table-demo';

@Component({
  selector: 'app-header-template',
  templateUrl: './header-template.component.html',
  styleUrls: ['./header-template.component.css']
})
export class HeaderTemplateComponent implements OnInit {

  itemResource = new DataTableResource(persons);
  items = [];
  totalItems = 1000;
  totalPages = 167;
  size = 6;
  column = {
    providerType: false,
    applicationType: false,
    multiExpandableRows: false,
    selectColumn: false,
    indexColumn: false
  };
  index = 1;

  constructor() {
  }


  ngOnInit(): void {
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => {
      this.items = items;
    });
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.caseNumber);
  }

}
