import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Whatsapp';

  chatting:any;

  onConversationSelected(conversation:any){
    this.chatting = conversation;
  }
}
