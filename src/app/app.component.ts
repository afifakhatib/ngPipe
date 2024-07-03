import { Component, OnInit } from '@angular/core';
import { Iplayer } from './shared/module/player.interface';
import { cricketersArr } from './shared/const/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngPipe';

  cricketersData : Iplayer[] = cricketersArr ;

  searchVal : string = '';
  searchType : string = '';
  constructor(){

  }
  ngOnInit(): void {
    
  }



  onTypeChange(type : Event){
    this.searchType = (type.target as HTMLInputElement).value
    console.log(this.searchType);
  }
}
