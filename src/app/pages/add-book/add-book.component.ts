import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Book} from '../../model/Book';
import {Reader} from '../../model/Reader';
import {DataService} from '../../services/data.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
 
  book:Book = new Book();
  message:Boolean = false;
  notEmpty:Boolean = false;
  

  constructor(private dataservice:DataService, private router: Router) { 
   
  }

  ngOnInit(): void {
  }

  addBook(){
    if(this.book.title!=null && this.book.author!=null && this.book.publicationYear!=null){
    this.dataservice.addBook(this.book).subscribe((response)=>{
      console.log(response);
      this.message = true;
      setTimeout(() => ( this.message = false ), 5000);

    })
  }else{
    this.notEmpty = true;
  }
}
  gotoDashboard(){
    this.router.navigate(['/dashboard']);
  }

  onSubmit(userForm: NgForm) {
     userForm.resetForm();
}

clear(){
  this.notEmpty=false;
}

 }
