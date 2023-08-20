import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private token: string | undefined;
  private isUserAdmin: boolean = false;
  private error: string | undefined;

  setToken(input: string) {
    this.token = input;
  }

  isAuthed() : boolean {
    return this.token !== undefined;
  }

  getToken() {
    return this.token;
  }

  setAdmin(){
    this.isUserAdmin = true;
  }

  isAdmin() {
    return this.isUserAdmin;
  }

  setError(error: string) {
    this.error = error;
  }

  getError() {
    return this.error;
  }
}
