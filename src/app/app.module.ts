import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomDirectivesDirective } from './directives/custom-directives.directive';
import { DefaultDirectivesComponent } from './default-directives/default-directives.component';
import { CustomDirectivesWithParameterDirective } from './directives/custom-directives-with-parameter.directive';
import { HostListenerDirectivesDirective } from './directives/host-listener-directives.directive';
import { HostBindingDirectivesDirective } from './directives/host-binding-directives.directive';
import { CustomIfStructuralDirectiveDirective } from './directives/custom-if-structural-directive.directive';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CustomForStructuralDirectivesDirective } from './directives/custom-for-structural-directives.directive';

@NgModule({
  declarations: [
    // compomnentlerin kullanılabilmesi için burada declare(bildirmek) edilmesi gerekiyor. 
    // Component ilk defa oluşturulurken Angular CLI direkt buraya ekliyor 
    AppComponent,
    HomeComponent,
    DefaultDirectivesComponent,
    CustomDirectivesDirective,
    DefaultDirectivesComponent,
    CustomDirectivesWithParameterDirective,
    HostListenerDirectivesDirective,
    HostBindingDirectivesDirective,
    CustomIfStructuralDirectiveDirective,
    StructuralDirectivesComponent,
    CustomForStructuralDirectivesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//Uygulamanın ana route modülü