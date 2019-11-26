import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  posts:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getposts();
  }
  getposts(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(response => {
        this.posts =  response 
    },error => {
      console.log (error);
    });
  }
}
