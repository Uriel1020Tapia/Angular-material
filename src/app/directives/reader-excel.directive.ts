import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as XLSX from 'xlsx';
@Directive({
  selector: '[appReadexcel]',
  exportAs: 'readexcel'
})
export class ReaderExcelDirective {

  excelObs:Observable<any>;
  @Output() eventEmitter = new EventEmitter();

  constructor() { }

  @HostListener('change', ['$event.target'])
  onChange(target: HTMLInputElement) {
    const file = target.files[0];

    this.excelObs = new Observable((subscriber:Subscriber<any>) => {
      this.readFile(file,subscriber);
    });

    this.excelObs.subscribe((d) =>{
      this.eventEmitter.emit(d)
    });
  }
  readFile(file:File,subscriber:Subscriber<any>){
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e)=>{
      const bufferArray = e.target.result;
      const wb:XLSX.WorkBook = XLSX.read(bufferArray,{ type: 'buffer'});

      const wsname:string = wb.SheetNames[0];

      const ws:XLSX.WorkSheet = wb.Sheets[wsname];

      const data = XLSX.utils.sheet_to_json(ws);

      subscriber.next(data);
      subscriber.complete();
    }
  }
}
