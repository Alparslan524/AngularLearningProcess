import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})/* Pipe olduğunu burda bildiriyoruz */
export class CustomPipePipe implements PipeTransform {

  /* Pipe'ın kullanıldığı değeri manipule/transform etmemizi sağlayan fonksiyondur */
  transform(value: string, a:number, b:number ): string {/* a?:number diyerek parametreyi opsiyohnel yapabiliriz */
    /* string formatta çalışıcam, a ve b olarak 2 tane number parametre alıcam ve string tür geri döndürücem */
    return value.slice(a,b);
  }

}
