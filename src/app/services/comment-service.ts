import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  constructor(private firestore: AngularFirestore) {}

  getComments(articleId: string) {
    return this.firestore
      .collection('articles')
      .doc(articleId)
      .collection('comments', ref => ref.orderBy('createdAt', 'asc'))
      .valueChanges({ idField: 'id' });
  }

  addComment(articleId: string, text: string, user: firebase.User) {
    console.log('Adding comment for article:', articleId);
    return this.firestore
      .collection('articles')
      .doc(articleId)
      .collection('comments')
      .add({
        text,
        userId: user.uid,
        userName: user.displayName || 'Anonymous',
        userPhoto: user.photoURL || '',
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  }
}