
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal-example.component.html',
})
export class ModalExampleComponent implements OnInit, OnDestroy {
  name: string | undefined;

  subscription: Subscription|undefined;

  ngOnInit(): void {
    history.pushState(null, '');
    this.subscription = fromEvent(window, 'popstate').subscribe((_) => {
      history.pushState(null, '');
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}