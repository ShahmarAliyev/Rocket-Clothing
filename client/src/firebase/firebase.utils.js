import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAsPU5hY2l74TR7FtsL5XFVWZ_FsoWQg2o",
  authDomain: "onlineshoping-32010.firebaseapp.com",
  projectId: "onlineshoping-32010",
  storageBucket: "onlineshoping-32010.appspot.com",
  messagingSenderId: "774649837025",
  appId: "1:774649837025:web:7fde3e02f60a60e88f8ea0",
  measurementId: "G-DEKHGTBLBD",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const docRef = doc(collection(db, collectionKey));
    batch.set(docRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsunbscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsunbscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const auth = getAuth();
export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export default googleProvider;
