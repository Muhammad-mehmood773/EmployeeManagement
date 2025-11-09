import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../theme/ng-zorro-imports';

@Component({
  selector: 'app-header',
  imports: [SHARED_IMPORTS],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: { ngSkipHydration: 'true' },

})
export class Header implements OnInit{

  constructor() {
  }
  ngOnInit(): void {
  }

 

}
