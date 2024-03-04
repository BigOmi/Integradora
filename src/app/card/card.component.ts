import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @ViewChild('card') card: ElementRef;

  width = 0;
  height = 0;
  mouseX = 0;
  mouseY = 0;
  mouseLeaveDelay: any;

  constructor() {}

  handleMouseMove(event: MouseEvent) {
    this.mouseX = event.pageX - this.card.nativeElement.offsetLeft - this.width / 2;
    this.mouseY = event.pageY - this.card.nativeElement.offsetTop - this.height / 2;
  }

  handleMouseEnter() {
    clearTimeout(this.mouseLeaveDelay);
  }

  handleMouseLeave() {
    this.mouseLeaveDelay = setTimeout(() => {
      this.mouseX = 0;
      this.mouseY = 0;
    }, 1000);
  }

  get cardStyle() {
    const rX = this.mouseX * 30;
    const rY = this.mouseY * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  }

  get cardBgTransform() {
    const tX = this.mouseX * -40;
    const tY = this.mouseY * -40;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`
    };
  }
}
