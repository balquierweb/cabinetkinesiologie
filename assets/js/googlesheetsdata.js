var tab_name = 'TexteEtImages';
var spreadsheet_id = '1iQMNpCqr-IFwT7YFNNRpqYlNcT4dBkjYFdDIlW1uWIs';
var api_key = 'AIzaSyBFXLsXDAMTa4VjBRsqO2_ryk9NuXd3BmM';
var url = 'https://sheets.googleapis.com/v4/spreadsheets/' +
						spreadsheet_id + '/values/' + tab_name +
						'?alt=json&key=' + api_key;

function loadJSON(callback) {
		var xobj = new XMLHttpRequest();
				xobj.overrideMimeType("application/json");
		xobj.open('GET', url, true);
		xobj.onreadystatechange = function () {
					if (xobj.readyState == 4 && xobj.status == "200") {
						callback(xobj.responseText);
					}
		};
		xobj.send(null);
}

loadJSON(function(response) {
var actual_JSON = JSON.parse(response);
	realJSON = actual_JSON.values;
	realJSON.shift();
	var images = [];
	var horaires = [];
	var description = [];
	var telephone = [];
	var courriel = [];
	var instagram = [];
	var facebook = [];
	var address = [];
	for (t = 0; t < realJSON.length; t++) {
		if (realJSON[t][0] !== '' && realJSON[t][0] !== undefined) {
			images.push(realJSON[t][0]);
		}
		if (realJSON[t][1] !== '' && realJSON[t][1] !== undefined) {
			horaires.push(realJSON[t][1]);
		}
		if (realJSON[t][2] !== '' && realJSON[t][2] !== undefined) {
			description.push(realJSON[t][2]);
		}
		if (realJSON[t][3] !== '' && realJSON[t][3] !== undefined) {
			telephone.push(realJSON[t][3]);
		}
		if (realJSON[t][4] !== '' && realJSON[t][4] !== undefined) {
			courriel.push(realJSON[t][4]);
		}
		if (realJSON[t][5] !== '' && realJSON[t][5] !== undefined) {
			instagram.push(realJSON[t][5]);
		}
		if (realJSON[t][6] !== '' && realJSON[t][6] !== undefined) {
			facebook.push(realJSON[t][6]);
		}
		if (realJSON[t][7] !== '' && realJSON[t][7] !== undefined) {
			address.push(realJSON[t][7]);
		}
	}
	// image2(images);
	schedule(horaires);
	// longText(description);
	phone(telephone);
	mail(courriel);
	instagramSocialNetwork(instagram);
	facebookSocialNetwork(facebook);
	addresses(address);
});

/*
function image2(receivedJSON) {
	if(document.getElementById("img2") !== null) {
		var myImg = document.getElementById("img2");
		if(receivedJSON[0] !== undefined) {
			myImg.src = receivedJSON[0];
		}
	}
}
*/

function schedule(receivedJSON) {
	if(document.getElementById("plage_horaire_1") !== null) {
		var time1 = document.getElementById("plage_horaire_1");
		if(receivedJSON[0] !== undefined) {
			time1.innerHTML = receivedJSON[0];
		}
	}
	if(document.getElementById("plage_horaire_4") !== null) {
		var time4 = document.getElementById("plage_horaire_4");
		if(receivedJSON[0] !== undefined) {
			time4.innerHTML = receivedJSON[0];
		}
	}
	if(document.getElementById("plage_horaire_2") !== null) {
		var time2 = document.getElementById("plage_horaire_2");
		if(receivedJSON[1] !== undefined) {
			time2.innerHTML = receivedJSON[1];
		}
	}
	if(document.getElementById("plage_horaire_5") !== null) {
		var time5 = document.getElementById("plage_horaire_5");
		if(receivedJSON[1] !== undefined) {
			time5.innerHTML = receivedJSON[1];
		}
	}
	if(document.getElementById("plage_horaire_3") !== null) {
		var time3 = document.getElementById("plage_horaire_3");
		if(receivedJSON[2] !== undefined) {
			time3.innerHTML = receivedJSON[2];
		}
	}
	if(document.getElementById("plage_horaire_6") !== null) {
		var time6 = document.getElementById("plage_horaire_6");
		if(receivedJSON[2] !== undefined) {
			time6.innerHTML = receivedJSON[2];
		}
	}
	if(document.getElementById("plage_horaire_7") !== null) {
		var time7 = document.getElementById("plage_horaire_7");
		if(receivedJSON[3] !== undefined) {
			time7.innerHTML = receivedJSON[3];
		}
	}
	if(document.getElementById("plage_horaire_8") !== null) {
		var time8 = document.getElementById("plage_horaire_8");
		if(receivedJSON[2] !== undefined) {
			time8.innerHTML = receivedJSON[2];
		}
	}
}

/*
function longText(receivedJSON) {
	if(document.getElementById("description") !== null) {
		var desc = document.getElementById("description");
		if(receivedJSON[0] !== undefined) {
			desc.innerHTML = receivedJSON[0];
		}
	}
}
*/

function phone(receivedJSON) {
	if(document.getElementById("myPhoneNumber") !== null) {
		var phone = document.getElementById("myPhoneNumber");
		if(receivedJSON[0] !== undefined) {
			phone.value = '+'+receivedJSON[0];
		}
	}
}

function mail(receivedJSON) {
	if(document.getElementById("myEmail") !== null) {
		var mail = document.getElementById("myEmail");
		if(receivedJSON[0] !== undefined) {
			mail.value = receivedJSON[0];
		}
	}
}

function instagramSocialNetwork(receivedJSON) {
	if(document.getElementById("instagram") !== null) {
		var instagram = document.getElementById("instagram");
		if(receivedJSON[0] !== undefined) {
			instagram.href = receivedJSON[0];
		}
	}
}

function facebookSocialNetwork(receivedJSON) {
	if(document.getElementById("facebook") !== null) {
		var facebook = document.getElementById("facebook");
		if(receivedJSON[0] !== undefined) {
			facebook.href = receivedJSON[0];
		}
	}
}

function addresses(receivedJSON) {
	if(document.getElementById("address_1") !== null) {
		var address = document.getElementById("address_1");
		if(receivedJSON[0] !== undefined) {
			address.innerHTML = receivedJSON[0];
		}
	}
	if(document.getElementById("address_2") !== null) {
		var address = document.getElementById("address_2");
		if(receivedJSON[0] !== undefined) {
			address.innerHTML = receivedJSON[0];
		}
	}
	if(document.getElementById("address_3") !== null) {
		var address = document.getElementById("address_3");
		if(receivedJSON[0] !== undefined) {
			address.innerHTML = receivedJSON[0];
		}
	}
}