// Initialise Firebase. See https://firebase.google.com/docs/database/web/start#web-version-9

import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getStorage, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREABSE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Get reference to realtime database service - NoSQL: data stored as single JSON tree
export const realTimeDb = getDatabase();

// USER DATA
export const writeUserData = (userId, userName, email, imageUrl, host) => {
  //  Create reference to path where realTimeDb will read/write data. Second argument to ref() is the path at which we want to interact with the data
  const userRef = ref(realTimeDb, "users/" + userId);

  // Write data to the reference - will overwrite any existing data at that ref
  set(userRef, {
    username: userName,
    email: email,
    profile_picture: imageUrl,
    host: host,
  });
};

export const getUserName = (userId) => {
  // Create reference to path to get the data
  const userNameRef = ref(realTimeDb, "users/" + userId + "/username");
  // onValue is an observer that gets triggered when listener is attached, and when data (including child data) updates. Listener receives snapshot (of data) at time of event. val() gives you value of snapshot.
  onValue(userNameRef, (snapshot) => {
    const data = snapshot.val();
    // updateUserName(postElement, data); FIREBASE TUTORIAL EG
    console.log("userData:", data);
  });
};

// HOMES DATA
export const writeHomeData = (
  userId,
  homeId,
  name,
  description,
  location,
  imageUrl,
  price,
  rating
) => {
  const homeRef = ref(realTimeDb, "homes/" + homeId);

  set(homeRef, {
    createdBy: userId,
    name: name,
    description: description,
    location: location,
    src: imageUrl,
    pricePerNight: price,
    star: rating,
  });
};

export const getHomeData = (homeId) => {
  const homeRef = ref(realTimeDb, "homes/" + homeId);
  onValue(homeRef, (snapshot) => {
    const data = snapshot.val();
    console.log("homeData:", data);
  });
};

/* FIREBASE TUTORIAL NOTES - working with lists: use push(), which generates unique key based on timestamp to allow for several clients to add child data to the same location at the same time without write conflicts
eg adding post to list of posts by user
const postListRef = ref(db, 'post-comments/' + postId);
const newPostRef = push(postListRef);
set(newPostRef, {
  //...
});

Then, to access that data, iterate through the snapshot (which returns entire list of data - ie don't use val()):

const commentsRef = ref(db, 'post-comments/' + postId);
onValue(commentsRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
  });
});

Most of time, don't want to iterate entire list esp if large. Can listen to child events and use functions like onChildAdded(), onChildChanged(), onChildRemoved() eg:
onChildAdded(commentsRef, (data) => {
  addCommentElement(postElement, data.key, data.val().text, data.val().author);
});
onChildChanged(commentsRef, (data) => {
  setCommentValues(postElement, data.key, data.val().text, data.val().author);
});
*/

// Get Cloud Firestore instance - NoSQL: data stored as a collection of documents
// export const db = getFirestore(app);

// Get Firebase storage instance - stores files such as images and other user-generated content
// export const storage = getStorage(app);

// Get Auth instance associated with app and add an observer for changes to user's sign-in state
export const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  console.log(user);
});
