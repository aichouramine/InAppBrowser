import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit  {

  
  constructor( private inAppBrowser: InAppBrowser ) {
    
      
         
  
   
   }
  
  ngOnInit(){
    
    const options: InAppBrowserOptions ={
      zoom:'yes',
      location:'no',
      hideurlbar:'yes',
      hardwareback : 'yes',
      fullscreen : 'yes'
    }
   
     {
     
      const browser = this.inAppBrowser.create('http://192.168.2.32/','_blank',options);
      
     
    }
        }
        
     
     
    
  
 
  }
