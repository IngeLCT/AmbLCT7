// Configuración global de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrXP59_tqclwCfbPxw8j0VRhi2WMirEgI",
  authDomain: "ambientelct.firebaseapp.com",
  projectId: "ambientelct",
  storageBucket: "ambientelct.firebasestorage.app",
  messagingSenderId: "235996067091",
  appId: "1:235996067091:web:1403de3576c14b278e56e6",
  measurementId: "G-LLKLK0T3VC"
};

// Inicializa Firebase una sola vez
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
} // Si ya está inicializado, usa la instancia existente