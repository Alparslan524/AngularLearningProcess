import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpperCase } from 'src/app/validators/upper-case';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.scss']
})
export class ModelDrivenFormsComponent {
  frm:FormGroup;
  
  constructor(private formBuilder:FormBuilder) {
    this.frm = formBuilder.group({
      name:["",[Validators.required,Validators.minLength(3),UpperCase]], // "" Buraya herhangi bir değer girerek default değer verebiliriz.
      surname:["",[Validators.required,Validators.maxLength(10)]], // 
      tel:["",Validators.min(6)],
      email:["", Validators.email],// Email formatında kontrol sağlar
      adress: formBuilder.group({
        country:["", Validators.minLength(3)],
        city:[""],
        adress:[""]
      })
    })
    /* Build in validasyonlar => 
    min => Değerin sağlanman sayıdan büyük veya eşit olmasını gerektiren validator
    max => Değerin sağlanman sayıdan küçük veya eşit olmasını gerektiren validator
    required => Değerin girilmesini zorunlu kılan validator
    requiredTrue => Değerin true olmasını zorunlu kılan validator. Genellikle Checkboxlar için kullanılır
    email => Değerin email formatına uygun olmasını gerektiren validator
    minlenght&maxlenght => Stringlerde karakter sınırını belirleyen validator
    
    */



  }

  onSubmit() {// Basit bir kontrol sağladık. Validators.required ile işaretlenmiş olan inputlar boş kalırsa hata vericek.
    if (this.frm.valid) {
      console.log(this.frm.value);
    }
    else{
      console.log("Form is invalid!!");
    }
}

get name(){
  return this.frm.get("name");
}

get surname(){
  return this.frm.get("surname");
}
get tel(){
  return this.frm.get("tel");
}



}
