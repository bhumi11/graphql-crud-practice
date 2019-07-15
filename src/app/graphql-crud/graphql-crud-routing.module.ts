import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphqlCrudContainerComponent } from './graphql-crud-container/graphql-crud-container.component';


const routes: Routes = [
  {
    path: '',
    component: GraphqlCrudContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphqlCrudRoutingModule { }
