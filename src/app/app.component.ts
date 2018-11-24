import { Component } from '@angular/core';
import { Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { HomePage } from './home/home.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  rootPage: any = HomePage;
  public alertShown:boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController
  ) {
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      platform.backButton.subscribe(() => {
        if (this.alertShown==false) {
          this.presentAlertConfirm();  
        }
      }, 0)
    } );
  }


async presentAlertConfirm() {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Do you want Exit?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.alertShown=false;
        }
      }, {
        text: 'Yes',
                handler: () => {
                  console.log('Yes clicked');
                  navigator['app'].exitApp();
        }
      }
    ]
  });

  await alert.present().then(()=>{
        this.alertShown=true;
  });

}
}

