import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CarouselDirective } from './carousel.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VedioPipe } from './pipe/vedio.pipe';

@NgModule({
  declarations: [CarouselDirective, VedioPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselDirective,
    VedioPipe,
    
  ]
})
export class SharedModule { }
