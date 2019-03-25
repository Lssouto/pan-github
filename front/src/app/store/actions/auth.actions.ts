import { Action } from '@ngrx/store';

export enum ActionTypes {
  Success = '[Auth API] Login Success',
  Failure = '[Auth API] Login Fail',
  Logout = '[Auth API] Logout',
}

export class SuccessAuth implements Action {
  readonly type = ActionTypes.Success;
  constructor(public token: string) {}
}

export class FailureAuth implements Action {
    readonly type = ActionTypes.Failure;
    constructor() {}
}

export class LogoutAuth implements Action {
    readonly type = ActionTypes.Logout;
    constructor() {}
}

export type Actions = SuccessAuth | FailureAuth | LogoutAuth;
