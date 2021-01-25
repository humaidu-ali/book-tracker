import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
 allReaders:Reader[]=[];
 books:Observable<Book[]>
 message:Boolean = false;

constructor(private dataService:DataService) {
}
ngOnInit(): void {
this.getAllBooks();
this.getAllReaders();

}


getAllBooks(){
  this.dataService.getAllBooks().subscribe((respond) =>{
    this.allBooks = respond;
    console.log(this.allBooks);
  })
}


getAllReaders(){
  this.dataService.getAllReaders().subscribe((res)=>{
    this.allReaders = res;
    console.log(this.allReaders);
  })
}


deleteBook(id:number){
  this.dataService.deleteBook(id).subscribe((response)=>{
    console.log(response);
    this.getAllBooks();
    this.message = true;
    setTimeout(() => ( this.message = false ), 5000);
  })
  
}

}
