import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as Query from './../../../global-query';
import { Observable, Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class GraphqlCrudPresenterService {

  modalRef: BsModalRef;
  // user: Query.User;
  name: string;
  
  public userData$: Observable<Query.User>;
  public user$: Observable<Query.User>;
  public deleteUser$: Observable<number>;
  private deleteUser: Subject<number> = new Subject();
  private user: Subject<Query.User> = new Subject();
  private userData: Subject<Query.User> = new Subject();
  constructor(private modalService: BsModalService, private fb: FormBuilder) {
    this.deleteUser$ = this.deleteUser.asObservable();
    this.user$ = this.user.asObservable();
    this.userData$ = this.userData.asObservable();
   }

  public buildForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.minLength(2), Validators.maxLength(30)]]
    });
  }

  /** Open Modal */
  public openModal(template: TemplateRef<any>): void {
    this.name = '';
    this.user.next({id: null, name: ''});
    // this.user = {id: null, name: ''};
    this.modalRef = this.modalService.show(template);
  }

  /** Close Modal */
  public closeFirstModal(): void {
    this.modalRef.hide();
    this.modalRef = null;
  }

  /** Edit User Form */
  public showEditUserForm(user, template): void {
    this.name = user.name;
    // this.filterForm.patchValue(this.name);
    this.user.next(user);
    console.log(this.name);
    console.log(user);
    
    // this.user = user;
    this.modalRef = this.modalService.show(template);
  }

  public createUser(name: string) {
    this.userData.next({id: null, name});
  }

  public updateUser(id: number, name: string) {
    debugger
    this.userData.next({id, name});
  }
  public removeUser(id: number) {
    this.deleteUser.next(id);
  }
}
