import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class newsComponent implements OnInit {

  isHandset : Observable<BreakpointState>= this.breakpointObserver.observe(Breakpoints.Handset)
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
