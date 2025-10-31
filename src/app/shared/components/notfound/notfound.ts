import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../ng-zorro-imports';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [SHARED_IMPORTS,RouterModule],
  templateUrl: './notfound.html',
  styleUrl: './notfound.css',
})
export class Notfound {

}
