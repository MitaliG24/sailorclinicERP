async function examineBundle() {
  const scriptRes = await fetch('https://sailorclinic-erp.vercel.app/assets/routes-BCDjziiU.js');
  const text = await scriptRes.text();
  const idx = text.indexOf('sailor_clinic_patients');
  console.log(text.slice(idx, idx + 1500));
}
examineBundle().catch(console.error);
