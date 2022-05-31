// src/app/my-grid-application/my-grid-application.component.ts
import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    private gridOptions: GridOptions;
    private grid2Showing: boolean = false;
    private hasBeenShown: boolean = false;
    currentTab;

    constructor() {
        this.gridOptions = <GridOptions>{
          onGridReady: this.gridReady.bind(this),
          columnDefs: this.getColumnDefs(),
          rowData: this.getRowData()
        };
    }
    gridReady(params) {
      console.log('grid ready')
      params.api.sizeColumnsToFit();
    }
    showGrid2() {
      this.grid2Showing = true;
      this.hasBeenShown = true;
    }

    getColumnDefs() {
      return [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                width: 100
            },

        ];
    }
    getRowData() {
      return [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ];
    }
    getRowData2() {
      return [
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3}
        ];
    } 
}