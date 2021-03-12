import { HomeComponent } from './home/home.component';
import { RenderComponent } from './render/render.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WipComponent } from './wip/wip.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'Home',
        component: HomeComponent
      },
      {
        path: 'Calcolo',
        component: WipComponent
      },
      {
        path: 'Progettazione',
        component: WipComponent
      },
      {
        path: 'Render',
        component: RenderComponent
      },
      {
        path: 'Collaborazioni',
        component: CollaborationsComponent
      },
      {
        path: 'Contatti',
        component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
