import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlCrudContainerComponent } from './graphql-crud-container.component';

describe('GraphqlCrudContainerComponent', () => {
  let component: GraphqlCrudContainerComponent;
  let fixture: ComponentFixture<GraphqlCrudContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqlCrudContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlCrudContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
