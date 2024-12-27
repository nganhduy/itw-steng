import { Component, inject, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SortOptions, UserList } from 'src/interface/userList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'itw-stengg';

  userList: UserList[] = [];
  originalUserList: UserList[] = [];
  departmentOptions: string[] = [];
  selectedDepartmentOptions: string = '';

  sortOptions: SortOptions[] = [
    { name: "Age", key: "age"},
    { name: "Name", key: "name"}
  ]

  selectedOptions!: SortOptions | null;

  private appService = inject(AppService);

  constructor() {}

  ngOnInit(): void {
    this.initUserList();
  }

  initUserList(){
    this.appService.getUserList().subscribe((userList) => {
      this.originalUserList = userList.sort((a, b) => a.business_unit.localeCompare(b.business_unit));
      this.userList = [...this.originalUserList];
      this.poplulateDepartmentOptions(this.userList);
    });
  }

  poplulateDepartmentOptions(userList: UserList[]): void{
    const departments = new Set(userList.map((user) => user.department));
    this.departmentOptions = Array.from(departments);
  }

  onSelectDepartment(departmentName: string): void {
    this.selectedDepartmentOptions = this.selectedDepartmentOptions === departmentName ? '' : departmentName;
    this.handleSort();
  }

  handleSort(){
    let filteredList = [...this.originalUserList];
    if(this.selectedDepartmentOptions){
      filteredList = filteredList.filter((user) => user.department === this.selectedDepartmentOptions);
    }

    if(this.selectedOptions?.key === "age"){
      filteredList = filteredList.sort((a, b) => a.age - b.age);
    } else if (this.selectedOptions?.key === "name"){
      filteredList = filteredList.sort((a, b) => a.name.localeCompare(b.name));
    }

    this.userList = filteredList;
  }

  onSortOptionChange(){
    this.handleSort();
  }

  onRefresh(): void{
    this.initUserList();
    this.selectedDepartmentOptions = '';
    this.selectedOptions = null;
  }
}
