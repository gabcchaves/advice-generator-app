'use strict';

// Fetch an advice
function fetchAdvice() {
	let request = new Request('https://api.adviceslip.com/advice');
	fetch(request, { cache: "no-store" })
		.then((response) => response.json())
		.then((data) => {
			console.log(data.slip.advice);
			document.querySelector("#advice-number")
				.appendChild(document.createTextNode("Advice #" + data.slip.id));
			document.querySelector("#advice-text")
				.appendChild(document.createTextNode(data.slip.advice));
		});
}

// New advice when page loads
fetchAdvice();
