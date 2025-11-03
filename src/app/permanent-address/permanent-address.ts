import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../shared/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-permanent-address',
  imports: [SHARED_IMPORTS, ReactiveFormsModule, CommonModule],
  templateUrl: './permanent-address.html',
  styleUrl: './permanent-address.css',
})
export class PermanentAddress implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
