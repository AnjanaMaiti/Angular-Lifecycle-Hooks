import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  title = 'Angular-Lifecycle-Hooks';
  constructor(){
    console.log("constructor");
  }
  ngOnInit(){
    console.log("OnInit");
  }
  ngAfterContentInit(){
    console.log("AfterContentInit");
  }
  ngAfterViewInit(){
    console.log("AfterViewInit");
  }
  ngOnDestroy(){
    console.log("OnDestroy");
  }
}
