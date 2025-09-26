document.getElementById('fetchBtn').onclick = async function() {
	try {
		const res = await fetch('http://localhost:3000/');
		const text = await res.text();
		document.getElementById('response').textContent = text;
	} catch (err) {
		document.getElementById('response').textContent = 'Error: ' + err;
	}
};