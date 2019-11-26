import axios from 'axios';
import { urlBase64ToUint8Array } from '../utils/convert';


const api = axios.create({
  baseURL: 'http://localhost:8080/notification',
  timeout: 5000,
});

const vapidPublicKey = 'BD7nG42-5H1GY1G4fFqXOnIdDu7RTP882DMLzXZyXzfWVRzZi-xYsmouflp26kQ-ik22OmmOIDUmbE4USjz32xQ';
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)
// console.log(convertedVapidKey)
export default {
  subscribe() {
    // console.log('serviceWorker' in navigator)
    navigator.serviceWorker.ready.then(registration => {
      if (!registration.pushManager) {
        alert("Push Unsupported")
        return;
      }

      registration.pushManager
        .subscribe({
          userVisibleOnly: true, //Always display notifications
          applicationServerKey: convertedVapidKey
        })
        .then(subscription => api.post('/register', subscription))
        .catch(err => console.error("Push subscription error: ", err));
    });
  },
  unsubscribe() {
    navigator.serviceWorker.ready.then(registration => {
      //Find the registered push subscription in the service worker
      registration.pushManager
        .getSubscription()
        .then(subscription => {
          if (!subscription) {
            return
            //If there isn't a subscription, then there's nothing to do
          }

          subscription
            .unsubscribe()
            .then(() => axios.delete("/unregister"))
            .catch(err => console.error(err))
        })
        .catch((err) => console.error(err))
    })
  }
};
