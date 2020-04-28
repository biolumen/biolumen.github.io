		var sData = function(){
			// get the user data from the forms's input fields. 
			let fname = document.forms[0].fname.value;
			let sex = document.forms[0].sex.value;
			let age = document.forms[0].age.value;
			let levelOfEducation = document.forms[0].levelOfEducation.value;
			let haveYouHeard = document.forms[0].haveYouHeard.value;
			let whereFirstHear = document.forms[0].whereFirstHear.value;
			let Meaning = document.forms[0].Meaning.value;
			let WhyBiodiversityIsImportant = document.forms[0].WhyBiodiversityIsImportant.value;
			let BiodiversityToLife = document.forms[0].BiodiversityToLife.value;
			let WhyAreTheEnvironmentsImportant = document.forms[0].WhyAreTheEnvironmentsImportant.value;
			let isAware = document.forms[0].isAware.value;
			let threats = document.forms[0].threats.value;
			let preserve = document.forms[0].preserve.value;
			
			let objComment = {name: fname, sex: sex, age: age, educ: levelOfEducation, heard: haveYouHeard, wherefirst: whereFirstHear, meaning: Meaning, important: WhyBiodiversityIsImportant,
			tolife: BiodiversityToLife, emportant: WhyAreTheEnvironmentsImportant, aware: isAware, threat: threats, preserves: preserve };
			
			let jsonString = JSON.stringify(objComment);
			
			count = (!localStorage.getItem("count")) ? 1 : Number(localStorage.getItem("count")) + 1;
			
			record = "Record" + count
			
			localStorage.setItem(record, jsonString)
			
			localStorage.setItem("count", count.toString())
		}
		
		var rData = function(){
			count = localStorage.getItem("count")
			
			if (count) {
				for (i=1; i<=count; i++) {
					record = "Record" + i	
					
					text = localStorage.getItem(record); 

					recordObject = JSON.parse(text);	
					
					answers.innerHTML += "<h4> You are "+recordObject.name + ", a " + recordObject.sex+ ", " + recordObject.age + " of age, who is studying or have completed " + recordObject.educ +
					" education. You " + recordObject.heard + " heard of the term 'biodiversity' and you heard it first " + recordObject.wherefirst + ". You think biodiversity is " + recordObject.meaning +
					" and it is important because " + recordObject.important + ". Biodiversity affects your life as/by " + recordObject.tolife + " and you do think that the environment (forests, swamps, rivers) is important because "
					+ recordObject.emportant + ". You " + recordObject.aware + " aware that biodiversity is threatened by what you think is " + recordObject.threat + ". Lastly, you think we can preserve biodiversity by " + recordObject.preserves + ".";
				}
			}
			else {answers.innerHTML = "Here is what we've heard from you..."}
 			
		}		