import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-side',
  templateUrl: './sidebar-side.component.html',
  styleUrls: ['./sidebar-side.component.scss']
})
export class SidebarSideComponent implements OnInit {

  constructor() { }
  menuItems: any[] = [
    
    {
      name: "Dashboard",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard/home"
    },
    {
      name: "Form Basic",
      type: "link",
      tooltip: "Form Basic",
      icon: "description",
      state: "forms/basic"
    },
    {
      name: "Read Excel",
      type: "link",
      tooltip: "Read Exce xlsx",
      icon: "chrome_reader_mode",
      state: "forms/read-excel"
    }, 
    {
      name: "File Base64",
      type: "link",
      tooltip: "File Base64",
      icon: "chrome_reader_mode",
      state: "forms/file-to-b64"
    }, 
    {
      name: "Task",
      type: "link",
      tooltip: "Help",
      icon: "help",
      state: "tasks"
    }
  ];

  ngOnInit(): void {
  }

}

