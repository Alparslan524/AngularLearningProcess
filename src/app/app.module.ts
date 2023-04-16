import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustomDirectivesDirective } from './directives/custom-directives.directive';
import { DefaultDirectivesComponent } from './components/default-directives/default-directives.component';
import { CustomDirectivesWithParameterDirective } from './directives/custom-directives-with-parameter.directive';
import { HostListenerDirectivesDirective } from './directives/host-listener-directives.directive';
import { HostBindingDirectivesDirective } from './directives/host-binding-directives.directive';
import { CustomIfStructuralDirectiveDirective } from './directives/custom-if-structural-directive.directive';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { CustomForStructuralDirectivesDirective } from './directives/custom-for-structural-directives.directive';
import { PipeComponentComponent } from './components/pipe-component/pipe-component.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { ParentComponent } from './components/parentToChildCommunication/parent/parent.component';
import { ChildComponent } from './components/parentToChildCommunication/child/child.component';
import { ChildComponent as ChildComponent2 } from './components/childToParentCommunication/child/child.component';
import { ParentComponent as ParentComponent2 } from './components/childToParentCommunication/parent/parent.component';

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
    CustomForStructuralDirectivesDirective,
    PipeComponentComponent,
    CustomPipePipe,
    ParentComponent,
    ChildComponent,
    ChildComponent2,
    ParentComponent2,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//Uygulamanın ana route modülü
