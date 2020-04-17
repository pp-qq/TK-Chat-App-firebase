import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCLlkioiD6U4v4ekP4zDTQlK0V-ptw5aZI",
  authDomain: "tk-chat-app-83f31.firebaseapp.com",
  databaseURL: "https://tk-chat-app-83f31.firebaseio.com",
  projectId: "tk-chat-app-83f31",
  storageBucket: "tk-chat-app-83f31.appspot.com",
  messagingSenderId: "624805439019",
  appId: "1:624805439019:web:df2e77bbbcea1e0b022c6e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
