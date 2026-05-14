const urls = [
  'https://image.shutterstock.com/image-photo/smile-design-treatment-dentistry-aesthetic-600nw-2487941219.jpg',
  'https://www.shutterstock.com/image-photo/smile-design-treatment-dentistry-aesthetic-260nw-2487941219.jpg',
  'https://image.shutterstock.com/shutterstock/photos/2487941219/display_1500/stock-photo-2487941219.jpg'
];
Promise.all(urls.map(u => fetch(u, {method: 'HEAD'}).then(r => console.log(r.status, u)).catch(e => console.log('Err', u))));
