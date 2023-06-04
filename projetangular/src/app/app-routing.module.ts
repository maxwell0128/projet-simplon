import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';
import { ModifPersonneComponent } from './modif-personne/modif-personne.component';
import { VoirPersonneComponent } from './voir-personne/voir-personne.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : 'personnes',component:ListPersonneComponent},
  {path : 'ajouter-personnes',component:AjoutPersonneComponent},
  {path : '',redirectTo:'personnes',pathMatch:'full'},
  {path: 'modifiez-personnes/:id', component: ModifPersonneComponent},
  {path: 'voir-personnes/:id', component: VoirPersonneComponent},
  {path : ':id',redirectTo:'voir-personnes/:id',pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
