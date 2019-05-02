import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../service/datatable.service';
import { User } from '../../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public users: User[] = [];
  constructor(public dataTable: DataTableService) { }

  ngOnInit() {
    this.dataTable.getUsersFromApi().subscribe((data) => {
      data.forEach(user => {
        this.users.push({
          name: user.name,
          address: user.address,
          email: user.email,
          phone: user.phone,
          username: user.username
        });
      });
    });
  }

}