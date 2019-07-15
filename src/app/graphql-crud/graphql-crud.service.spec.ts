import { TestBed } from '@angular/core/testing';

import { GraphqlCrudService } from './graphql-crud.service';

describe('GraphqlCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphqlCrudService = TestBed.get(GraphqlCrudService);
    expect(service).toBeTruthy();
  });
});
