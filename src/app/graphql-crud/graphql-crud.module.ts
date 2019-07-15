import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphqlCrudRoutingModule } from './graphql-crud-routing.module';
import { GraphqlCrudContainerComponent } from './graphql-crud-container/graphql-crud-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphqlCrudPresentationComponent } from './graphql-crud-container/graphql-crud-presentation/graphql-crud-presentation.component';

@NgModule({
  declarations: [GraphqlCrudContainerComponent, GraphqlCrudPresentationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GraphqlCrudRoutingModule
  ]
})
export class GraphqlCrudModule { }
