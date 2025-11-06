import { CommonModule } from '@angular/common';
import { SHARED_IMPORTS } from './../../shared/ng-zorro-imports';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-family-members',
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule],
  templateUrl: './add-family-members.html',
  styleUrl: './add-family-members.css',
})
export class AddFamilyMembers implements OnInit {

  constructor() { }
  ngOnInit(): void {
   
  }

}
