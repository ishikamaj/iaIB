import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import  { FormPage } from '../form/form.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  constructor(private modalController: ModalController) { }

  openModal() {
    this.modalController.create({component: FormPage}).then((modalElement) => {
      modalElement.present();
    })
  }

  ngOnInit() {
    
  }

}
