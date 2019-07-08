import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbYBrhNOR666qHLBZeAlKlHyc1xdi7H2w",
  authDomain: "nba-fullstack-b11e3.firebaseapp.com",
  databaseURL: "https://nba-fullstack-b11e3.firebaseio.com",
  projectId: "nba-fullstack-b11e3",
  storageBucket: "",
  messagingSenderId: "113855077717",
  appId: "1:113855077717:web:0d6b3aae55064f50"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper
};
