/* This file assumes that cpModals.min.js has already been loaded */

function glyder_check(vendor_id, item_id, that) {
	if (localStorage) {
		console.log(localStorage);
		localStorage.setItem("current_vendor_id", vendor_id);
		localStorage.setItem("current_item_id", item_id);
		if (localStorage["glyder_login"] && localStorage["glyder_login"] != "") {
			// Check if user already has access to the item....
			var user_id = localStorage["glyder_login"];
			if (glyder_check_subscription(user_id, vendor_id)) {
				$('#div_access_message').html('Your account includes access to this premium content.');
				$("#prePaidModal").modal("show");
			} else if (glyder_check_item_purchased(user_id, vendor_id, item_id)) {
				$('#div_access_message').html('You previously bought this item.&nbsp; It&#39;s&nbsp;yours.');				
				$("#prePaidModal").modal("show");
			} else {
				showBuyItem();
			}
	    } else {
	        showLoginPage();
	    }
	} else {
		alert ('Please use an HTML5 compatible browser that supports localStorage.');
	}
}

function glyder_check_subscription(user_id, vendor_id) {
	var valid_until = localStorage[user_id+'_'+vendor_id];
	return (valid_until && valid_until != "0");
}

function glyder_check_item_purchased(user_id, vendor_id, item_id) {
	var valid_until = localStorage[user_id+'_'+vendor_id+'_'+item_id];
	return (valid_until && valid_until != "0");
}

function glyder_authorize(vendor_id, item_id, that) {
	if (localStorage) {
		console.log(localStorage);
		localStorage.setItem("current_vendor_id", vendor_id);
		localStorage.setItem("current_item_id", item_id);
		if (localStorage["glyder_login"] && localStorage["glyder_login"] != "") {
			// Check if user already has access to the item....
			showBuyItem();
	    } else {
	        showLoginPage();
	    }
	} else {
		alert ('Please use an HTML5 compatible browser that supports localStorage.');
	}
};

function showBuyItem() {
	// alert('show buy modal vendor:' + vendor_id + ' item: ' + item_id + ' user:' + user_id);
	// Get the cost and day pass cost of the item using ajax
	var item_cost = 0.15;
	var day_pass_cost = 1.0;
	$('#div_item_cost').html('$' + item_cost);
	$('#div_daypass_cost').html('$' + day_pass_cost);
	$("#accessModal").modal("show");
};

function showLoginPage() {
	//alert('show login modal vendor:' + vendor_id + ' item: ' + item_id);
	$("#loginModal").modal("show");
};

function glyderSignUp() {
	//alert('show login modal vendor:' + vendor_id + ' item: ' + item_id);
	$("#loginModal").modal("hide");
	$("#signupModal").modal("show");
};

function glyderLogin() {
	var username =  $("#loginUsername").val();
	var password = $("#loginPassword").val();
	switch (username) {
		case 'smohan36@gmail.com':
		case '4252337793':
		case 'bvolbeda@gmail.com':
		case '2067783303':
			if (password != 'Kitanda') {
				alert('Please enter a valid password to login.');
				if (localStorage) {
					localStorage.setItem("glyder_login", "");
				}
				return false;
			}
			if (localStorage) {
				localStorage.setItem("glyder_login", username);
				$("#loginModal").modal("hide");
				showBuyItem();
			}
			return true;
		default:
			alert ('User not registered with Glyder.')
			break;
	}
	if (localStorage) {
		localStorage.setItem("glyder_login", "");
	}
	return false;
};

function glyderLogout() {
	if (localStorage) {
		localStorage.setItem("glyder_login", "");
	}
	$("#accessModal").modal("hide");
	$("#prePaidModal").modal("hide");
}

function glyderBuyItem() {
	localStorage.setItem(localStorage["glyder_login"]+'_'+localStorage["current_vendor_id"]+'_'+localStorage["current_item_id"], "19999999999"); // Epoch Time
	$("#accessModal").modal("hide");
}

function glyderBuyItemAndGo() {
	glyderBuyItem();
	alert ('Redirect page to the URL for item_id ' + localStorage["current_item_id"]);
}

function glyderBuyDaypass() {
	localStorage.setItem(localStorage["glyder_login"]+'_'+localStorage["current_vendor_id"], "19999999999"); // Epoch Time
	$("#accessModal").modal("hide");
}

function glyderBuyDaypassAndGo() {
	glyderBuyDaypass();
	alert ('Redirect page to the URL for item_id ' + localStorage["current_item_id"]);
}

function glyderShowPrepaidItem() {
	setPrePaidTimeout();
	$("#prePaidModal").modal("show");
	alert ('Redirect page to the URL for item_id ' + localStorage["current_item_id"]);
}
