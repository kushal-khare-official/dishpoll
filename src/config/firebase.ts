import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCQbziYpcaw0Uszw1InhqT6IUZn27IA6fM',
  authDomain: 'dishpoll.firebaseapp.com',
  projectId: 'dishpoll',
  storageBucket: 'dishpoll.appspot.com',
  messagingSenderId: '453166568054',
  appId: '1:453166568054:web:c9d2b1af14a362430f4557',
}

const Firebase = initializeApp(firebaseConfig)

export const auth = getAuth()

export default Firebase
