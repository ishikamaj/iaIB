import { Component, OnInit } from '@angular/core';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  myVal: string = "";
  myVal1: string = "";
  myValue: string= "";
  myVal2: string = "";
  save()
  {
    this.myVal1 = this.myVal;
    this.myVal2 = this.myValue;
  }
  
  
  constructor(private platform: Platform, private document: DocumentViewer, private file: File, private transfer: FileTransfer) { 
    
  }

  openReleasePDF() {
    this.document.viewDocument('assets/release-form.pdf', 'application/pdf', {});
  }
  openPhotoVideoPDF() {
    this.document.viewDocument('assets/photo-video.pdf', 'application/pdf', {});
  }

  downloadLiability() {
    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    }
    else {
      path = this.file.dataDirectory;
    }

    const transfer = this.transfer.create();
    transfer.download('https://www.dropbox.com/s/l27u4vp7tbpu8y5/CTG%20Release%20of%20Liability%20Form.pdf?dl=0', path + 'release-form.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    }); 
  } 

  ngOnInit() {
    
  }

}
