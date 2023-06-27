import { Component, OnDestroy, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from '../modal-example/modal-example.component';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, Subscription, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  message = 'This modal example uses the modalController to present and dismiss modals.';
  // private unsubscriber : Subject<void> = new Subject<void>();
  constructor(private modalCtrl: ModalController,private location: LocationStrategy,public router: Router) {}


  async openModal() {
    // Disabling browser back navigation
    // history.pushState(null, '');
    // fromEvent(window, 'popstate').pipe(
    //   takeUntil(this.unsubscriber)
    // ).subscribe((_) => {
    //   history.pushState(null, '');
    // });
    // Disabling browser back navigation
    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    // this.unsubscriber.next();
    if (role === 'confirm') {
    //   this.unsubscriber.complete();
      this.message = `Hello, ${data}!`;
    }
    // if (role === 'cancel') {
    //   this.unsubscriber.complete();
    // } 
  }

}