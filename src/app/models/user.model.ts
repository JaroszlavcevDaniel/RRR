// User model for authenticated users
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

// Comment model for article comments
export interface Comment {
  id?: string;
  text: string;
  userId: string;
  userName: string;
  userPhoto: string;
  createdAt: any; // Firebase Timestamp
}