import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {Reader} from '../../model/Reader';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 active = 1;
 allBooks:Book[] = [];

constructor(private dataService:DataService) {
}
ngOnInit(): void {
this.getAllBooks();

}


getAllBooks(){
  this.dataService.getAllBooks().subscribe((respond) =>{
    this.allBooks = respond;
    console.log(this.allBooks);
  })
}


}
