async function calculateSHA256(text) {
    const textBuffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', textBuffer);
    return Array.from(new Uint8Array(hashBuffer))
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  }
  
  async function compareAndDisplayHash() {
    const inputText = document.getElementById('inputText').value;
    const otherText = 'muskan'; 
    
    const inputTextHash = await calculateSHA256(inputText);
    const otherTextHash = await calculateSHA256(otherText);
  
    if (inputTextHash === otherTextHash) {
      const hashResultElement = document.getElementById('hashResult');
      hashResultElement.textContent = `Hash Match: ${inputTextHash}`;
    } else {
      const hashResultElement = document.getElementById('hashResult');
      hashResultElement.textContent = 'Hashes do not match.';
    }
  }