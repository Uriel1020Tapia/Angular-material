import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-file-to-base64',
  templateUrl: './file-to-base64.component.html',
  styleUrls: ['./file-to-base64.component.scss']
})
export class FileToBase64Component implements OnInit {

  myImage:any[] =[];
  constructor() { }

  ngOnInit(): void {
  }

  onChangeFile($event:Event){
    const filesSelected =($event.target as HTMLInputElement).files;
    for (let file of Array.from(filesSelected)) {
        this.converterToBase64(file);
    }

  }
  converterToBase64(file:File){
    const $obs = new Observable((subscriber: Subscriber<any>)=> {
      this.readFile(file,subscriber);
    })
      $obs.subscribe((d)=>{
        console.log(d);
          this.myImage.push(d);
      },(err)=>{
        console.error(err);
      });
  }
  readFile(file:File,subscriber: Subscriber<any>){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = ()=> {
      subscriber.next(fileReader.result)
      subscriber.complete();
    };
    fileReader.onerror = (err) => {
      subscriber.error(err);
      subscriber.complete();
    };
  }
}
