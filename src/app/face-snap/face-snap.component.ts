import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  isSelectedCard!: boolean;

  ngOnInit(){
      this.buttonText = "Upvote 👍";
  }

  onSnap(){
    if(this.buttonText === "Downvote 👎")
    {
      this.faceSnap.snaps--;
      this.buttonText = "Upvote 👍";
    }
    else
    {
      this.faceSnap.snaps++;
      this.buttonText = "Downvote 👎";
    }
  }
}
