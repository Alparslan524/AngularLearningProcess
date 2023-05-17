import { AbstractControl, ValidationErrors } from "@angular/forms";

export function UpperCase(control: AbstractControl):ValidationErrors | null {

    const value = control.value;
    const ascii : string[] = [];
    for(let n = 65; n<=90; n++)
        ascii.push(String.fromCharCode(n));
    if(ascii.indexOf(value[0])==-1){
        return {capitalLetter:true}
    }
    return null;
    // Ascii tablosunda büyük garfleri alıyor ve kontrol deiyor  ve ilk harf büyük değil s e true dönüyor, ilk harf büyükse null dönüyor
}