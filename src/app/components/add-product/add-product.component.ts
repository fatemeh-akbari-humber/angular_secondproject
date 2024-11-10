// src/app/components/add-product/add-product.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private apiService: ApiService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.apiService.addProduct(form.value).subscribe(() => {
        console.log('Product added');
      });
      form.reset();
    }
  }
}
