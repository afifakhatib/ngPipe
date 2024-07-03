import { Pipe, PipeTransform } from '@angular/core';
import { cricketersArr } from '../const/player';
import { Iplayer } from '../module/player.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cricketersArr : Iplayer[] , searchVal : string , searchType : string = 'all'): Iplayer[] {
    let filteredArr : Iplayer[] = [];

    if(!searchVal){
      return cricketersArr
    }
    if(!cricketersArr){
      return []
    }
    //  console.log(searchType);
    //  console.log(searchVal);
     
     
    //  filteredArr = cricketersArr.filter(player => {
    //   if(searchVal){
    //     return player.country.toLowerCase().includes(searchVal.toLowerCase())
    //   }
    //   else{
    //    return cricketersArr
    //  }
    // })

    return filteredArr = cricketersArr.filter(player => {

      if(searchType ==='name'){
        return player.name.toLowerCase().includes(searchVal.toLowerCase())
      }
      else if(searchType ==='country'){
        return player.country.toLowerCase().includes(searchVal.toLowerCase())
      }
      else if(searchType ==='yearDebut'){
        return player.yearDebut.toLowerCase().includes(searchVal.toLowerCase())
      }
      else if(searchType === 'all'){
        return player.name.toLowerCase().includes(searchVal.toLowerCase()) || player.country.toLowerCase().includes(searchVal.toLowerCase()) || player.yearDebut.toLowerCase().includes(searchVal.toLowerCase())
      }
      else{
        return [];
      }
    })
  }

}
