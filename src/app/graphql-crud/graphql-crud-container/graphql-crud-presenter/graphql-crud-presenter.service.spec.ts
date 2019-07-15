import { TestBed } from '@angular/core/testing';

import { GraphqlCrudPresenterService } from './graphql-crud-presenter.service';

describe('GraphqlCrudPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphqlCrudPresenterService = TestBed.get(GraphqlCrudPresenterService);
    expect(service).toBeTruthy();
  });
});
