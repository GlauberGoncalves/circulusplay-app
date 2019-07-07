import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'comentarios/:id', loadChildren: './comentarios/comentarios.module#ComentariosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
