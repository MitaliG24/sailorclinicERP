async function examineBundle2() {
  const scriptRes = await fetch('https://sailorclinic-erp.vercel.app/assets/routes-BCDjziiU.js');
  const text = await scriptRes.text();
  const idx = text.indexOf('marine_clinic_admin_profile');
  console.log(text.slice(idx, idx + 1500));
}
examineBundle2().catch(console.error);
