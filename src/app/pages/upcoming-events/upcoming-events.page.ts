import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import  { FormPage } from '../form/form.page';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.page.html',
  styleUrls: ['./upcoming-events.page.scss'],
})
export class UpcomingEventsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  openModal() {
    this.modalController.create({component: FormPage}).then((modalElement) => {
      modalElement.present();
    })
  }
  ngOnInit() {
  }

}
