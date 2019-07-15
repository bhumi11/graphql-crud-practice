import { Component, OnInit, TemplateRef, Input, ChangeDetectionStrategy, Output, OnDestroy, EventEmitter } from '@angular/core';
import { GraphqlCrudPresenterService } from '../graphql-crud-presenter/graphql-crud-presenter.service';
import * as Query from './../../../global-query';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-graphql-crud-presentation',
  templateUrl: './graphql-crud-presentation.component.html',
  styleUrls: ['./graphql-crud-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphqlCrudPresentationComponent implements OnInit,OnDestroy {

  
  @Input() public set userData(userData) {
    if (userData) {
      console.log('userdata', userData);
      this._userData = userData;
    }
  }

  public get userData() {
    return this._userData;
  }
  @Output() public deleteUser: EventEmitter<number>;
  @Output() public updateData: EventEmitter<Query.User>;
  @Output() public createData: EventEmitter<Query.User>;
  public user;
  public userForm: FormGroup;
  private _userData: Query.User[];
  private destroy: Subject<boolean>;
  constructor(private presenter: GraphqlCrudPresenterService) {
    this.destroy = new Subject();
    this.deleteUser = new EventEmitter<number>();
    this.updateData = new EventEmitter<Query.User>();
    this.createData = new EventEmitter<Query.User>();
    this.userForm = this.presenter.buildForm();
  }

  ngOnInit() {
    this.presenter.user$.pipe(takeUntil(this.destroy)).subscribe((value) => this.user = value);
    this.presenter.deleteUser$.pipe(takeUntil(this.destroy)).subscribe((id: number) => this.deleteUser.emit(id));
    this.presenter.userData$.pipe(takeUntil(this.destroy)).subscribe((data) =>{
      if (data.id) {
        this.updateData.emit(data);
      } else {
        this.createData.emit(data);
      }
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.presenter.openModal(template);
  }

  public closeModal() {
    this.presenter.closeFirstModal();
  }

  public showEditUserForm(user, template) {
    this.userForm.patchValue(user);
    this.presenter.showEditUserForm(user, template);
  }
  public removeUser(id: number) {
    this.presenter.removeUser(id);
  }

  public createUser() {
    this.presenter.createUser(this.userForm.controls.name.value);
  }

  public updateUser(id: number) {
    this.presenter.updateUser(id, this.userForm.controls.name.value);
  }

  /** destroy */
  public ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
