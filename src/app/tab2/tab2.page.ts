import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  listMenu: any=[]

  constructor(private menuService:MenuService) {}

  getAllMenu() {
    this.menuService.getAllMenu().subscribe(
      response => {
        this.listMenu=response
      }, err => {
        this.listMenu=[]
      }
    )

  }

  ionViewWillEnter() {
    this.getAllMenu();
  }

  doRefresh(event) {
    this.getAllMenu();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  ngOnInit(){
    
  }
}
