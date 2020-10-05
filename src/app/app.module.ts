import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule, DesktopGuard, MobileGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { WipComponent } from './wip/wip.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MobileBodyComponent } from './mobile-body/mobile-body.component';
import { HomeComponent } from './home/home.component';
import { MobileHomeComponent } from './mobile-home/mobile-home.component';
import { MobileWipComponent } from './mobile-wip/mobile-wip.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MobileContactsComponent } from './mobile-contacts/mobile-contacts.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { MobileCollaborationsComponent } from './mobile-collaborations/mobile-collaborations.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    WipComponent,
    ContactsComponent,
    MobileBodyComponent,
    HomeComponent,
    MobileHomeComponent,
    MobileWipComponent,
    MobileHeaderComponent,
    MobileContactsComponent,
    CollaborationsComponent,
    MobileCollaborationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ DesktopGuard, MobileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
