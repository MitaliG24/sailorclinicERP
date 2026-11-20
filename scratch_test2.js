async function findServerFns() {
  const scriptRes = await fetch('https://sailorclinic-erp.vercel.app/assets/routes-BCDjziiU.js');
  const text = await scriptRes.text();
  
  // Find createServerFn or server function calls
  const matches = [...text.matchAll(/_serverFn[^"'\s),]+/g)].map(m => m[0]);
  console.log('Matches:', matches.slice(0, 10));

  // Also search for listPatients or similar in the bundled code
  const idx = text.indexOf('listPatientsServer');
  if (idx !== -1) {
    console.log('Context around listPatientsServer:', text.slice(Math.max(0, idx - 100), idx + 200));
  } else {
    console.log('listPatientsServer not found directly by name, searching for listPatients...');
    const idx2 = text.indexOf('listPatients');
    if (idx2 !== -1) {
      console.log('Context around listPatients:', text.slice(Math.max(0, idx2 - 100), idx2 + 200));
    }
  }

  // Let's search for "sailor_clinic_patients"
  const idx3 = text.indexOf('sailor_clinic_patients');
  if (idx3 !== -1) {
    console.log('Context around sailor_clinic_patients:', text.slice(Math.max(0, idx3 - 100), idx3 + 300));
  }
}
findServerFns().catch(console.error);
