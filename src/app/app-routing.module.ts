import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
    {
        path:'login',
        loadChildren: '@app/modules/login#LoginModule',
        pathMatch: 'full'
    },
    {
        path:'main',
        loadChildren: '@app/modules/main#MainModule',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}



