import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent {
  @ViewChild("frm1", {static:true}) frm:NgForm;// Detayları ileride
  // frm1 referansına karşılık gelen nesneyi elde et, frm'ye aktar

  // data ve frm ile veriye erişebiliriz. Ama data sadece createUser fonksiyonunun içinde kullanılır 
  createUser(data){
    console.log(data);// FormGroup içerisindeki her FormControl nesnesinin değerini döndürür
    console.log(this.frm.value);// FormGroup içerisindeki her FormControl nesnesinin değerini döndürür
    console.log("Valid: " +this.frm.valid);// Form geçerli ise true, değilse false döndürür
    console.log("Touched: " +this.frm.touched);// Kullanıcı form üzerinde en az bir alana değdiyse true döner
    console.log("Submitted: " +this.frm.submitted);// Form Submit edildiğinde true döndürür
    console.log(this.frm);
    console.log(this.frm.form);
    console.log(this.frm.controls);
  }


}
