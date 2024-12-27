import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserList } from 'src/interface/userList';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly mockData: UserList[] = [
    {
      name: 'Alice Johnson',
      business_unit: 'Sales',
      department: 'Retail',
      age: 29,
    },
    {
      name: 'BobSmith',
      business_unit: 'Sales',
      department: 'Wholesale',
      age: 34,
    },
    {
      name: 'CharlieBrown',
      business_unit: 'Sales',
      department: 'Retail',
      age: 28,
    },
    {
      name: 'Diana Prince',
      business_unit: 'Sales',
      department: 'Wholesale',
      age: 32,
    },
    {
      name: 'Ethan Hunt',
      business_unit: 'Marketing',
      department: 'Digital',
      age: 30,
    },
    {
      name: 'Fiona Gallagher',
      business_unit: 'Marketing',
      department: 'Content',
      age: 27,
    },
    {
      name: 'George Martin',
      business_unit: 'Marketing',
      department: 'Digital',
      age: 35,
    },
    {
      name: 'Hannah Lee',
      business_unit: 'Marketing',
      department: 'Content',
      age: 31,
    },
    {
      name: 'Ian Wright',
      business_unit: 'Sales',
      department: 'Retail',
      age: 33,
    },
    {
      name: 'Jane Doe',
      business_unit: 'Sales',
      department: 'Wholesale',
      age: 26,
    },
  ];

  constructor() {}

  getUserList(){
    return of(this.mockData);
  }
}
