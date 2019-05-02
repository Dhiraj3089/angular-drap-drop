import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  public componentList: Array<any> = [
    {
      id: "header",
      value: "Header"
    }, {
      id: "table",
      value: "Table"
    }, {
      id: "footer",
      value: "Footer"
    }, {
      id: "time",
      value: "Time"
    }, {
      id: "dropdown",
      value: "Dropdown"
    }, {
      id: "spinner",
      value: "Spinner"
    }, {
      id: "textbox",
      value: "Textbox"
    }, {
      id: "button",
      value: "Button"
    }, {
      id: "div",
      value: "Divider"
    }, {
      id: "mask",
      value: "Mask"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

}