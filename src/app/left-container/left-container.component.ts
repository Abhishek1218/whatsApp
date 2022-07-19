import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.scss']
})
export class LeftContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();

  conversation=[
    {name:"Abhishek",time:"9.49 PM",lastMessage:"Ok! let's meet",lastMessageRead:false,
      messages:[
        {body:"Hey how are you!",time:'9.49 PM', sender:true},
        {body:"Fine!",time:'9.49 PM', sender:false},
        {body:"Wanna catch up!",time:'9.49 PM', sender:true},
        {body:"Ok! let meet",time:'9.49 PM', sender:false},
      ]
    },
    {name:"Kanav",time:"9.01 PM",lastMessage:"mattis molestie a iaculis",lastMessageRead:true,
      messages:[
        {body:"labore et dolore m!",time:'9.49 PM', sender:true},
        {body:"minim veniam",time:'9.49 PM', sender:false},
        {body:"t mollit anim id est laborum",time:'9.49 PM', sender:true},
        {body:"enim ad minim ven",time:'9.49 PM', sender:false},
        {body:"mattis molestie a iaculis",time:'9.49 PM', sender:true},
      ]
   },
    {name:"Arnab",time:"9.30 PM",lastMessage:"gestas egestas fringi",lastMessageRead:false,
      messages:[
        {body:"disse interdum conse",time:'9.49 PM', sender:true},
        {body:"ucibus interdum posuere lorem ",time:'9.49 PM', sender:false},
        {body:"acilisis gravida ne",time:'9.49 PM', sender:true},
        {body:"gestas egestas fringi",time:'9.49 PM', sender:false},
      ]
   },
    {name:"Kashish",time:"10.00 PM",lastMessage:"uspendisse interdum",lastMessageRead:false,
      messages:[
        {body:"m posuere lorem",time:'9.49 PM', sender:true},
        {body:"ravida neque conva",time:'9.49 PM', sender:false},
        {body:"gestas egestas fringilla",time:'9.49 PM', sender:true},
        {body:"uspendisse interdum",time:'9.49 PM', sender:false},
      ]
    },
    {name:"Vishav",time:"8.20 PM",lastMessage:"vitae aliquet nec. Eu au",lastMessageRead:true,
      messages:[
        {body:"nterdum posuere lorem",time:'9.49 PM', sender:true},
        {body:"egestas fringilla",time:'9.49 PM', sender:false},
        {body:" interdum consectetur",time:'9.49 PM', sender:true},
        {body:"a neque convallis a",time:'9.49 PM', sender:false},
        {body:"vitae aliquet nec. Eu au",time:'9.49 PM', sender:true},
      ]
    },
    {name:"Anurag",time:"11.30 PM",lastMessage:"Nunc lobortis mattis aliquam",lastMessageRead:true,
      messages:[
        {body:"Massa tincidunt nunc",time:'9.49 PM', sender:true},
        {body:"Senectus et netus et malesuad",time:'9.49 PM', sender:false},
        {body:"lorem ipsum dolor",time:'9.49 PM', sender:true},
        {body:"Placerat duis ultricies lacus",time:'9.49 PM', sender:false},
        {body:"Nunc lobortis mattis aliquam",time:'9.49 PM', sender:true},
      ]
    },
    {name:"Rishav",time:"11.10 PM",lastMessage:"Placerat duis ultricies lacus",lastMessageRead:false,
      messages:[
        {body:"Massa tincidunt nunc",time:'9.49 PM', sender:true},
        {body:"nisl tincidunt. Senectus",time:'9.49 PM', sender:false},
        {body:"posuere lorem ipsum dolo",time:'9.49 PM', sender:true},
        {body:"Placerat duis ultricies lacus",time:'9.49 PM', sender:false},
      ]
    },
    {name:"Sahil",time:"11.10 PM",lastMessage:"Placerat duis ultricies lacus",lastMessageRead:false,
      messages:[
        {body:"Massa tincidunt nunc",time:'9.49 PM', sender:true},
        {body:"nisl tincidunt. Senectus",time:'9.49 PM', sender:false},
        {body:"posuere lorem ipsum dolo",time:'9.49 PM', sender:true},
        {body:"Placerat duis ultricies lacus",time:'9.49 PM', sender:false},
      ]
    },
    {name:"Pranav",time:"11.10 PM",lastMessage:"Placerat duis ultricies lacus",lastMessageRead:false,
      messages:[
        {body:"Massa tincidunt nunc",time:'9.49 PM', sender:true},
        {body:"nisl tincidunt. Senectus",time:'9.49 PM', sender:false},
        {body:"posuere lorem ipsum dolo",time:'9.49 PM', sender:true},
        {body:"Placerat duis ultricies lacus",time:'9.49 PM', sender:false},
      ]
    },
    {name:"Aniket",time:"11.30 PM",lastMessage:"Nunc lobortis mattis aliquam",lastMessageRead:true,
      messages:[
        {body:"Massa tincidunt nunc",time:'9.49 PM', sender:true},
        {body:"Senectus et netus et malesuad",time:'9.49 PM', sender:false},
        {body:"lorem ipsum dolor",time:'9.49 PM', sender:true},
        {body:"Placerat duis ultricies lacus",time:'9.49 PM', sender:false},
        {body:"Nunc lobortis mattis aliquam",time:'9.49 PM', sender:true},
      ]
    }
  ]

}
