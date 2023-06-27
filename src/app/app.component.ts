import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { Subscription, fromEvent } from 'rxjs';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  private backbuttonSubscription: Subscription | undefined;
  unregisterBackAction: any;
  constructor( private location: LocationStrategy) {
    this.location.back()
  }
  ngOnInit() {
}

ngOnDestroy() {
}
}
