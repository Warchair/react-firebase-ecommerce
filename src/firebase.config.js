import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyCQWtP0a-GJQ09IsoL5OXkzn3PXm1qjrxU",
	authDomain: "e-commerce-c4703.firebaseapp.com",
	projectId: "e-commerce-c4703",
	storageBucket: "e-commerce-c4703.appspot.com",
	messagingSenderId: "1020858837952",
	appId: "1:1020858837952:web:05bd45f0e995b7513eb625",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { app, db, storage, auth }
