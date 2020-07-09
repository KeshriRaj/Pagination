import { Component } from '@angular/core';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ChildpageComponent } from './childpage/childpage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
}
