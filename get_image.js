fetch('https://www.shutterstock.com/image-photo/smile-design-treatment-dentistry-aesthetic-before-2487941219', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
}).then(r => r.text()).then(t => {
  const matches = t.match(/https:\/\/[^"'\s]+\.jpg/gi);
  if (matches) {
    matches.filter(m => m.includes('2487941219')).forEach(m => console.log(m));
  }
});
