import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDocuments } from '../../dashboard/home/home.component';
import { CarouselService } from './carousel.service';

export const fadeIn = animation([
  style({opacity:0}),
  animate('2s',style({opacity:1}))
]);

export const scaleIn = animation([
  style({opacity:0,transform:'scale(0.5)'}),
  animate('2s',style({opacity:1,transform:'scale(1)'}))
])

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations:[
    trigger('carouselAnimation',[
      transition('void=>*',[
        useAnimation(scaleIn)
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() slides:IDocuments[];
  currentIndex:number = 0;
  counterValue:number;
  time = 5;
  interval:Subscription;

  constructor(private carouselService:CarouselService) { }

  ngOnInit(): void {
    this.initInterval();
  }

  initInterval(){
    if(this.interval){
      this.interval.unsubscribe();
    }
    this.interval = this.carouselService.initInterval(this.time * 30).subscribe((d)=>{
      this.counterValue = d.counterValue;
      if(d.counterValue === 100){
        this.next();
      }
    })
  }
  next(){
    if(this.currentIndex < this.slides.length -1){
      this.currentIndex++
    }else{
      this.currentIndex = 0;
    }
    this.initInterval();
  }
  prev(){
    if(this.currentIndex > 0){
      this.currentIndex--;
    }else{
      this.currentIndex =  this.slides.length-1;
    }
    this.initInterval();
  }
  @HostListener("mouseenter")
  onMouseEnter(){
    this.carouselService.pauseCounter();
  }
  @HostListener("mouseleave")
  onMouseLeave(){
    this.carouselService.resumeCounter();
  }
}
