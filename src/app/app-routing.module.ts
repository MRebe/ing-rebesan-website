import { MobileWipComponent } from './mobile-wip/mobile-wip.component';
import { MobileHomeComponent } from './mobile-home/mobile-home.component';
import { HomeComponent } from './home/home.component';
import { MobileBodyComponent } from './mobile-body/mobile-body.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WipComponent } from './wip/wip.component';
import { BodyComponent } from './body/body.component';
import { Injectable, NgModule } from '@angular/core';
import { Router, Routes, RouterModule, CanActivate } from '@angular/router';

@Injectable()
export class MobileGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {

    if (window.innerWidth >= 768) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}

@Injectable()
export class DesktopGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {

    if (window.innerWidth < 768) {
      this.router.navigate(['/m/']);
      return false;
    }

    return true;
  }
}

const routes: Routes = [
  { path: '',
    redirectTo: '/Home',
    canActivate: [DesktopGuard],
    pathMatch: 'full'
  },
  { path: 'm',
    redirectTo: 'm/Home',
    canActivate: [MobileGuard],
    pathMatch: 'full'
  },
  {
    path: '',
    component: BodyComponent,
    canActivate: [DesktopGuard],
    children: [
      {
        path: 'Home',
        component: HomeComponent,
      },
      {
        path: 'Progettazione',
        component: WipComponent,
      },
      {
        path: 'Contatti',
        component: ContactsComponent,
      },
      {
        path: 'WIP',
        component: WipComponent,
      }
    ]
  },
  {
    path: 'm',
    component: MobileBodyComponent,
    canActivate: [MobileGuard],
    children: [
      {
        path: 'Home',
        component: MobileWipComponent,
      },
      {
        path: 'Progettazione',
        component: MobileWipComponent,
      },
      {
        path: 'Contatti',
        component: MobileWipComponent,
      },
      {
        path: 'WIP',
        component: MobileWipComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
