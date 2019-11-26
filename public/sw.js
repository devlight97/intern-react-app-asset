/* eslint-disable no-restricted-globals */
self.addEventListener('install', () => console.log('service worker is installed'));

self.addEventListener('push', function (event) {
  const dataNotification = event.data.json();
  self.registration.showNotification(
    dataNotification.title,
    {...dataNotification.options},
  );

});

console.log('this is sw file');