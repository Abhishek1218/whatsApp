import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.scss']
})
export class ChatSectionComponent implements OnInit {

  @Input() conversation:any;

  constructor() { }

  ngOnInit(): void {
  }


  showProfile=false

  openProfile(){
    this.showProfile = true
  }

  closeProfile(){
    this.showProfile = false
  }

}
