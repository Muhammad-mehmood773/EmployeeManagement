import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../theme/ng-zorro-imports';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [SHARED_IMPORTS, RouterLink],
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
