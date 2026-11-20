async function testClientFlow() {
  const loginRes = await fetch('https://sailorclinic-erp.vercel.app/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'medical@sailorsmedical.com', password: 'Admin@123' }),
  });
  const cookieHeader = loginRes.headers.get('set-cookie');
  console.log('Login result:', loginRes.status, 'Cookie:', cookieHeader);

  // Read the me endpoint
  const meRes = await fetch('https://sailorclinic-erp.vercel.app/api/auth/me', {
    headers: { cookie: cookieHeader || '' }
  });
  console.log('Me endpoint:', meRes.status, await meRes.text());

  // Check how server functions are invoked by inspecting the routes chunk
  const homeRes = await fetch('https://sailorclinic-erp.vercel.app/', {
    headers: { cookie: cookieHeader || '' }
  });
  const html = await homeRes.text();
  const scriptMatches = html.match(/assets\/[a-zA-Z0-9_\-]+\.js/g) || [];
  console.log('Found scripts:', scriptMatches);

  for (const s of scriptMatches) {
    if (s.includes('index') || s.includes('routes')) {
      const scriptRes = await fetch(`https://sailorclinic-erp.vercel.app/${s}`);
      const text = await scriptRes.text();
      // Search for server function call URLs or hashes
      const fnMatches = text.match(/_serverFn\/[a-zA-Z0-9_\-]+/g);
      if (fnMatches) {
        console.log(`Server fn references in ${s}:`, [...new Set(fnMatches)]);
      }
    }
  }
}
testClientFlow().catch(console.error);
