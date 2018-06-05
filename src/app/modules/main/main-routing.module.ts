import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    },
    children: [
  {
    path: 'listGroups',
    loadChildren: '@app/modules/groups#GroupsModule'
  },
  {
    path: 'listUsers',
    loadChildren: '@app/modules/users#UsersModule'
  },
  {
    path: 'user',
    loadChildren: '@app/modules/user#UserModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
