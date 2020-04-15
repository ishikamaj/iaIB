import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages:any[]=[];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pages = [{
        pagename: "Home",
        icon: "home",
        url:"home"
      },
      {
        pagename: "Past Events",
        icon: "calendar-outline",
        url:"past-events"
      },
      {
        pagename: "Upcoming Events",
        icon: "hourglass-outline",
        url:"upcoming-events"
      },
      {
        pagename: "Opportunities",
        icon: "alert-outline",
        url:"opportunities"
      },
      {
        pagename: "Profile",
        icon: "person-circle-outline",
        url:"profile"
      }]
    });
  }

  Goto(page)
  {
    this.router.navigate([page.url]);
  }

}
