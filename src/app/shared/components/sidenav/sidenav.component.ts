import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input("items") public menuItems: any[] = [];
  // @Input("hasIconMenu") public hasIconTypeMenuItem: boolean;
  // @Input("iconMenuTitle") public iconTypeMenuTitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
