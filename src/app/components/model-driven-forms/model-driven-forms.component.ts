import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.scss']
})
export class ModelDrivenFormsComponent {
  frm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.frm = formBuilder.group({
      name:[""], // Buraya herhangi bir değer girerek default değer verebiliriz.
      surname:["", Validators.required], // 
      tel:[""],
      email:[""],
      adress: formBuilder.group({
        country:[""],
        city:[""],
        adress:[""]
      })
    })
  }

  onSubmit() {// Basit bir kontrol sağladık. Validators.required ile işaretlenmiş olan inputlar boş kalırsa hata vericek.
    if (this.frm.valid) {
      console.log(this.frm.value);
    }
    else{
      console.log("Form is invalid!!");
    }
}

}
