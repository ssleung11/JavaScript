
const button = document.getElementById('GetUsers');
	function xhrRequest( url ) {
	return new Promise( function(resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open( 'GET', url, true );
		xhr.send();
		xhr.onload = function () {
			if (xhr.status === 200) {
			console.log(url);
			const response = JSON.parse(xhr.responseText);
			resolve(response);
			} else {
				const error = xhr.statusText || 'Houston, we have a problem!';
				reject(error);
				}
			}
		}
	)};
	button.addEventListener("click", processCall);
	async function processCall() {
	try {
		// first API - to call random user
		const first_resp = await xhrRequest('https://randomuser.me/api/?results=1');
		const name = first_resp.results[0].name.first;
		const pic = first_resp.results[0].picture.large;
		document.getElementById("Output").innerHTML = ` `; 


		let table = document.getElementById("Output");
		let image = document.createElement("img");
		image.src = first_resp.results[0].picture.large
		table.appendChild(image);
		let gender = first_resp.results[0].gender;

		// second API - to call dad joke 

		const url = 'https://icanhazdadjoke.com/slack'; 
		const second_resp = await xhrRequest(url);
		const jokes = second_resp.attachments[0].text; 
		
		// will only show joke if gender of random user is male 	

		if (gender === 'male') {
			let table2 = document.getElementById("Output");
	        let dadJoke = document.createElement("li");
	        dadJoke.innerHTML = second_resp.attachments[0].text;
	        table2.appendChild(dadJoke);

		} else if (gender === 'female'){
			let table3 = document.getElementById("Output"); 
			let noJoke = document.createElement('li');
			
			function badJokesArray() {
				const badJokes = ["I don't tell bad dad jokes.", "Ew, I don't like bad dad jokes.", "Dad jokes are bad, and boring.", "No bad dad joke from me!", "I don't tell bad dad jokes."];
				const badJokesLength = badJokes.length;
				for (i = 0; i < badJokesLength; i++){ 
				let x = Math.floor(Math.random()*4)+1;
				noJoke.innerHTML= badJokes[x];
				}
			}
			badJokesArray();
			table3.appendChild(noJoke);
		}
		// type error 
	} catch(err) {
	document.getElementById("Output").innerHTML = err; 
	}
}



