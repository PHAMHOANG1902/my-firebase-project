const admin = require('firebase-admin');
const serviceAccount = require('/Users/phamnhathoang/Downloads/fir-to-nodejs-firebase-adminsdk-wl6yn-e1d0a1f244.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-to-nodejs-default-rtdb.asia-southeast1.firebasedatabase.app'
});

// Ví dụ: Thêm dữ liệu vào Firestore
const db = admin.firestore();

const docRef = db.collection('users').doc('alovelace');

docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
}).then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
