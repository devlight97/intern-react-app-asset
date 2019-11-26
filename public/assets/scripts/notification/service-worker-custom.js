/* eslint-disable no-restricted-globals */
self.addEventListener('install', () => console.log('service worker is installed'));

self.addEventListener('push', function (event) {
  // const data = event.data.json();
  console.log(event.data)
  // event.waitUntil(
  //   self.registration.showNotification(data.title, {
  //     ...data.options,
  //   })
  // );
});

console.log('this is sw file')