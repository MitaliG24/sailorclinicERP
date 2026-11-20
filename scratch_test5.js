async function examine() {
  const scriptRes = await fetch('https://sailorclinic-erp.vercel.app/assets/routes-BCDjziiU.js');
  const text = await scriptRes.text();
  const idx = text.indexOf('loadDataFromMongo');
  if (idx !== -1) {
    console.log('loadDataFromMongo:', text.slice(idx - 100, idx + 500));
  } else {
    // Search for "Could not sync with MongoDB Atlas"
    const idx2 = text.indexOf('Could not sync with MongoDB');
    console.log('MongoDB sync msg idx:', idx2);
    if (idx2 !== -1) {
      console.log(text.slice(idx2 - 300, idx2 + 200));
    }
  }
}
examine().catch(console.error);
