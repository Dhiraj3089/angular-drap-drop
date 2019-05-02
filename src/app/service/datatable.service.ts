import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
@Injectable()
export class DataTableService {

  constructor(private http: HttpClient) { }

  getUsersFromApi() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}