import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../shared/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-present-address',
  imports: [SHARED_IMPORTS,ReactiveFormsModule, CommonModule],
  templateUrl: './present-address.html',
  styleUrl: './present-address.css',
})
export class PresentAddress implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
