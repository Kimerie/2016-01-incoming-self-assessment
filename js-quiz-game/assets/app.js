$(document).ready(function(){
	
	event.preventDefault();
	// our current count, attached to the upper right hand corner of the browser
	var $currentCount = $('#counter')
	// our current form which will hold the question and subsequent answers loaded in the app.questions object.
	var $currentForm = $('form');
	// creates our first random question upon generating the game.html file
	var firstRandomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
	
	//attaches the counter to the highscore on page
	var addCounter = function(){
		$currentCount.prepend(('<div class ="navbar-brand" id="#counter"' + app.count +'</div>'));
	};
	addCounter();
	//attaches the first question to the form onload
	$currentForm.prepend('<h3 class = "question"> Question: ' + firstRandomQuestion.question + '</h3>' + '<br><br>');

	// appends all four answers to the corresponding question
	var answerGenerator = function (randomQuestion){
		$('input[type="radio"]').each(function() {
     var radioContent = $(this);
     radioContent.after($("<label />")
      .attr("for", radioContent.attr("id"))
     	.text(radioContent.val()) );
		});
		// //create variable to store answer choices so that they can be appended to the "value" property on the radio buttons
		// var choicesHtml = '';
		// //iterate through the question to get choices
		// for(var i=0; i< app.randomQuestion.length; i++){
		// 	//see if element is the 'choices' element in the object
		// 	if(app.randomQuestion[i] === 'choices'){
		// 		//iterate through choices to produce list of answer choices
		// 		for(var j= 0; j<i.length; j++){
		// 			//populate choices into radio button inputs
		// 			choicesHtml = '<p>' + app.randomQuestion.choices + '</p>'
		// 			choicesHtml += '<input type="radio" name="choices" '
		// 			choicesHtml += 'value="' + app.randomQuestion[i][j] +'">'
		// 		}

		// 	}
		// 	//append to radio button
		// 	$(choicesHtml).append('.radio');
		// }
	};

	//adds a random question and its corresponding answers to our currentForm
	var QandAgenerator = function(){
		//display random question and answer choices for user
		//iterate through app.randdomQuestion to get element with correct answer
		//store the correct answer so that it can be compared with user input
	};

	// checks the answer when the user clicks "Am I right?"
	$('#checkAnswer').on('click',function(){
		event.preventDefault();
		// represents whichever check box the user clicks on
		$userInput = $('input:checked');

		if(app.randomQuestion.choices[$userInput.val()] === app.randomQuestion.correct ){
			app.successDisplay();
			app.countIncrementor();
			$currentCount.empty().append(app.count);
			$('.choices').empty().append(QandAgenerator());
		} else {
			app.failureDisplay();
		}		
	});

	$('#restart').on('click', function(){
		location.reload();
	});

	answerGenerator(firstRandomQuestion);
});

