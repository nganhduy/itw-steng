import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  userName: string = '';

  @Input() 
  set userNameInput(value: string){
    if(!value) return;
    this.userName = value;
    this.transformUserNameToUpperCase();
  }
  @Input() userBusinessUnit!: string;
  @Input() userDepartment!: string;
  @Input() userAge!: number;

  @Output() refreshEmitter = new EventEmitter();


  constructor() { }

  ngOnInit() {
    
  }

  onRefresh(): void{
    this.refreshEmitter.emit(true);
  }

  transformUserNameToUpperCase(){
    this.userName += ' is Working at ST Eng';
  }
}
