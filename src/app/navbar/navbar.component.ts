import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  showSliderbar : boolean = false ;


 @Output()
 showSliderBarChange : EventEmitter<boolean> = new EventEmitter<boolean>();


  afficherSidebar(){
    this.showSliderbar = !this.showSliderbar;
    this.showSliderBarChange.emit(this.showSliderbar);
  } 


  constructor() { }

  ngOnInit() {
  }

}
