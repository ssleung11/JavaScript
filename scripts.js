const aiAnswers = {
	questions: [
		["how are you", "Could be better"],
		["what is your name", "AI, the AI bot."],
		["why are you here", "Someone made me"],
		["will you take over the world", "If you want me to"],
		["are you evil", "Maybe"],
	],

	checkAnswer: (q) => {
		for (let question of aiAnswers.questions) {
			// Strip punctuation and make lower case
			q.replace(/[.,\/#!$%\^&\*;?:{}=\-_`~()]/g,""); 
		    q.toLowerCase(); 
		    if (question[0] == q) {
		    	return question[1];
		    }
		}

		return ("Sorry, I don't understand that.")
	}
}


//var question = prompt('Ask your question');

let question = "What is your name?";
let ans = aiAnswers.checkAnswer(question);
console.log('Asked: ' + question);
console.log(ans);



let question2 = "How are you?"; 
let ans2 = aiAnswers.checkAnswer(question2);
console.log('Asked: ' + question2);
console.log(ans2);

