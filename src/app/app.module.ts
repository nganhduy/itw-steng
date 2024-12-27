import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [		
    AppComponent,
      UserCardComponent,
   ],
  imports: [
    BrowserModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ListboxModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
