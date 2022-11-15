import { Component, OnInit } from '@angular/core';
import { RawPost } from '../RawPost';
import { RedditAPIService } from '../reddit-api.service';


@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})
export class RedditPostComponent implements OnInit {

  post:RawPost = {} as RawPost;
  constructor(private apiService:RedditAPIService) { }

  ngOnInit(): void {
    this.apiService.getPost().subscribe((response:RawPost) =>
    {
      this.post = response;
    });
  }

}
