import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

export interface IUsers {
  Usuario: string;
  Correo: string;
}
@Component({
  selector: 'app-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.scss']
})
export class ReadExcelComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Seleccionar archivo';
  
  file:File;
  arrayBuffer:any;
  fileList:any;

  // table
  displayedColumns: string[] = ['usuario', 'correo'];
  dataSource:IUsers[];

  constructor() { }

  ngOnInit(): void {
  }
  uploadFileEvt(file: any) {
    if (file.target.files && file.target.files[0]) {
      this.fileAttr = file.target.files[0].name;
      this.file =file.target.files[0];
      let fileReader = new FileReader();
      fileReader.readAsArrayBuffer(this.file);
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        let data = new Uint8Array(this.arrayBuffer);
        let arr = new Array();
        for(let i=0; i !=data.length; i++){
          arr[i] = String.fromCharCode(data[i]);  
        }
        let bstr = arr.join("");
        var workbook = XLSX.read(bstr, {type:"binary"});    
        var first_sheet_name = workbook.SheetNames[0];    
        var worksheet = workbook.Sheets[first_sheet_name];    
        console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));    
          var arraylist = XLSX.utils.sheet_to_json(worksheet,{raw:true});     
              this.fileList =arraylist;    
              console.log(this.fileList)  
      }
    }
  }

  dataFromEvtEmitter($event){
    console.log($event)  
    this.dataSource = $event;
  }

  onSendData(){
    console.log("send data . . .", this.dataSource);
  }
}
