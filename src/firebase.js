import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { ref, onUnmounted } from "vue";
import { onSnapshot } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBvVrmZy7U2n9SjDmvzv-59T-Xaeub1pDU",
  authDomain: "provider-search-6582f.firebaseapp.com",
  projectId: "provider-search-6582f",
  storageBucket: "provider-search-6582f.appspot.com",
  messagingSenderId: "19627552698",
  appId: "1:19627552698:web:6e6a4599af1170dabc3783",
  measurementId: "G-5ZWG8XHS7Z",
};

// configure firebase credentials
const firebaseApp = initializeApp(config);

// set up database access
const db = getFirestore(firebaseApp);
const providerCollection = collection(db, "providers");

// helper function to grab providers
export const getUser = async () => {
  const provider = await getDocs(providerCollection);
  return provider.exists ? provider.data() : null;
};
/*
    use a composition hook that will return a ref to an array of
    providers from the database
*/

export const useLoadProviders = () => {
  const providers = ref([]);
  /*
        add a listener on the provider collection so that
        it updates whenever changes in the providers collection
        are detected

        creating this listener will return us a cleanup function
        which will call on the unmounted lifecycle hook
    */
  const close = onSnapshot((snapshot) => {
    providers.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return providers;
};
