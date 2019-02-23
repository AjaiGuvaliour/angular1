import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CarouselDirective } from './carousel.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VedioPipe } from './pipe/vedio.pipe';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [CarouselDirective, VedioPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule,
    NgxPaginationModule
  ],
  exports:[
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselDirective,
    AngularFontAwesomeModule,
    VedioPipe,
    ToastrModule, 
    NgxPaginationModule 
  ]
})
export class SharedModule { }
