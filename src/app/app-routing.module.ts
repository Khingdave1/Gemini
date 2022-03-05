import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { InstitutionsComponent } from './modules/institutions/institutions.component';
import { PriceComponent } from './modules/price/price.component';
import { SecurityComponent } from './modules/security/security.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'price',
        component: PriceComponent,
        data: {
          title: 'Price',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'security',
        component: SecurityComponent,
        data: {
          title: 'Security',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'institutions',
        component: InstitutionsComponent,
        data: {
          title: 'Institutions',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          description: 'Description Meta Tag Content'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
