  import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyA8-udisMx4R7kqk3EXCbl0yB0CSaTgRvI",
    authDomain: "cadastro-clientes-3964c.firebaseapp.com",
    projectId: "cadastro-clientes-3964c",
    storageBucket: "cadastro-clientes-3964c.appspot.com",
    messagingSenderId: "841171150451",
    appId: "1:841171150451:web:922b23e5661b3cb2a76c06"
  };

  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref()