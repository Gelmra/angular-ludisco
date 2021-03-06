import { Component, OnInit } from "@angular/core";
import { Post } from "../post";
import { POSTS } from "../post-list";

@Component({
  selector: "app-ludisco",
  templateUrl: "./ludisco.component.html",
  styleUrls: ["./ludisco.component.css"]
})
export class LudiscoComponent implements OnInit {
  posts = POSTS;
  selectedPost?: Post;

  constructor() {}

  ngOnInit() {}

  onSelect(post: Post): void {
    this.selectedPost = post;
  }
}
