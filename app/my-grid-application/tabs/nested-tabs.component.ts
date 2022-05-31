import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
    selector: 'nested-tab',
    template: `<div *ngIf="hasBeenActive" [hidden]="!active"><ng-content></ng-content></div>`
})
export class NestedTabComponent implements OnInit {
    @Input() title;
    @Input() active: boolean = false;
    public hasBeenActive: boolean = false;

    activate() {
      this.active = true;
      this.hasBeenActive = true; 
    }

    disactivate() {
      this.active = false;
    }

    constructor() { }

    ngOnInit() {
    }

}

@Component({
    selector: 'nested-tabs',
    templateUrl: './nested-tabs.component.html',
    styleUrls: ['./nested-tabs.component.css']
})
export class NestedTabsComponent implements OnInit, AfterContentInit {

    @ContentChildren(NestedTabComponent) tabs: QueryList<NestedTabComponent>;
    @Output() tabChanged = new EventEmitter<NestedTabComponent>();

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit() {
        console.log("After content:", this.tabs);
        this.selectTab(this.tabs.first);
    }

    selectTab(tab: NestedTabComponent) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => tab.disactivate() );

        // activate the tab the user has clicked on.
        if (tab) {
            tab.activate();
            const foundTab = this.tabs.find( t => t == tab)
            if (foundTab != null) {
              this.tabChanged.emit(foundTab);
            }
        }
    }
}