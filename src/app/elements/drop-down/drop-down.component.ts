import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../service/datatable.service';
import { User } from '../../user';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  constructor(public dataTable: DataTableService) { }
  public selectedUser:any
  public ddlData:any=[];
  ngOnInit() {
    this.dataTable.getUsersFromApi().subscribe(users => {
      users.forEach(user => {
        this.ddlData.push({
          name: user.name,
          value: user.email
        });
      });
    })
  }

}
