import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  images!: { url: string; title: string; titleLink: string; description: string; }[];
  @Output()
  imageSelected = new EventEmitter<{url: string, title: string, titleLink: string, description: string}>();

  selectImage(image: {url: string, title: string, titleLink: string, description: string}) {
    this.imageSelected.emit(image);
  }

  openTitleLink(url: string, event: MouseEvent) {
    event.stopPropagation(); //Prevents clicking on the link from triggering an image swap
    //The 'href' attribute should handle opening the link in a new tab
    }
}
