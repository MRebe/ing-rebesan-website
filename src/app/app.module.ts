import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { WipComponent } from './wip/wip.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { RenderComponent } from './render/render.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WipComponent,
    ContactsComponent,
    HomeComponent,
    CollaborationsComponent,
    RenderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
