import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { SHARED_IMPORTS } from '../../../shared/theme/ng-zorro-imports';

interface AllowanceLayer {
  id: number;
  name: string;
  amount: string;
  isChecked: boolean;
}

interface AllowanceCategory {
  id: number;
  name: string;
  layers: AllowanceLayer[];
}

@Component({
  selector: 'app-add-map-allowance-modal',
  templateUrl: './add-map-allowance-modal.html',
  imports: [SHARED_IMPORTS, ReactiveFormsModule, CommonModule],
  styleUrls: ['./add-map-allowance-modal.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AddMapAllowanceModal implements OnInit {

  form!: FormGroup;
  allowanceCategories: AllowanceCategory[] = [
    {
      id: 1,
      name: 'Medical Insurance',
      layers: [
        { id: 101, name: 'Room Rent', amount: '3000 PKR', isChecked: true },
        { id: 102, name: 'OPD', amount: '1500 PKR', isChecked: false },
        { id: 103, name: 'Consultation', amount: '800 PKR', isChecked: false }
      ]
    },
    {
      id: 2,
      name: 'Mobile Allowance',
      layers: [
        { id: 201, name: 'Postpaid Bill', amount: '1200 PKR', isChecked: true },
        { id: 202, name: 'Device Support', amount: '500 PKR', isChecked: false }
      ]
    },
    {
      id: 3,
      name: 'Fuel Allowance',
      layers: [
        { id: 301, name: 'Monthly Liters', amount: '2500 PKR', isChecked: true },
        { id: 302, name: 'Extra Miles', amount: '1200 PKR', isChecked: false }
      ]
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      categories: this.fb.array(this.allowanceCategories.map(cat =>
        this.fb.group({
          name: [cat.name],
          layers: this.fb.array(cat.layers.map(layer =>
            this.fb.group({
              name: [layer.name],
              amount: [layer.amount],
              isChecked: [layer.isChecked]
            })
          ))
        })
      ))
    });
  }


  get categories(): FormArray {
    return this.form.get('categories') as FormArray;
  }

  getLayers(categoryIndex: number): FormArray {
    return this.categories.at(categoryIndex).get('layers') as FormArray;
  }

  readonly customStyle = {
    background: '#f1f4fa',
    borderRadius: '4px',
    color: '#0000FF'
  };



}


