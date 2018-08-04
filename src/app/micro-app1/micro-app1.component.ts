import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'mc1-micro-app1',
  templateUrl: './micro-app1.component.html',
  styleUrls: ['./micro-app1.component.css'],
})
export class MicroApp1Component implements OnInit {
  
  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {

    this.location.subscribe((data) => {
      this.router.navigate([data.url]);
    });

    this.router.navigate([this.location.path(true)]);
  }

  goTo() {
    this.router.navigate(['microapp1/page2']);
  }
}
