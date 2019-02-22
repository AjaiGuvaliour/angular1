import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CarouselDirective } from './carousel.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VedioPipe } from './pipe/vedio.pipe';
import { ToastrModule } from 'ng6-toastr-notifications';


@NgModule({
  declarations: [CarouselDirective, VedioPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselDirective,
    VedioPipe,
    ToastrModule
    
  ]
})
export class SharedModule { }
