import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlCrudPresentationComponent } from './graphql-crud-presentation.component';

describe('GraphqlCrudPresentationComponent', () => {
  let component: GraphqlCrudPresentationComponent;
  let fixture: ComponentFixture<GraphqlCrudPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqlCrudPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlCrudPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
