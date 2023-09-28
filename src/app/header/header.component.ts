import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
@Output() searchText = new EventEmitter<string>();

search!: string;

constructor(){}

 setSearchValue() {
   this.searchText.emit(this.search);
} 

ngOnInit(){}
}
