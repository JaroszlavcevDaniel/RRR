// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from 'firebase/compat/app';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {

//   user$: Observable<firebase.User | null>;

//   constructor(private afAuth: AngularFireAuth) {
//     this.user$ = this.afAuth.authState;
//   }

//   loginWithGoogle() {
//     return this.afAuth.signInWithPopup(
//       new firebase.auth.GoogleAuthProvider()
//     );
//   }

//   logout() {
//     return this.afAuth.signOut();
//   }
// }
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user$: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  loginWithGoogle() {
    return this.afAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    return this.afAuth.signOut();
  }
}