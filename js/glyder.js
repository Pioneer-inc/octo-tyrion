/* This file assumes that cpModals.min.js has already been loaded */

google.load('visualization', '1', { packages: ['table', 'corechart'] });
var glyder_catalog_gsheet_url = "https://docs.google.com/spreadsheets/d/1hs7Bu9Y2hK0Bmai-h4stC5ho-qh61h7QxbFNCOpK2Ro/edit?usp=sharing";
var glyder_item_cost = 0.15;
var glyder_item_redirect_link = "";

// MOVE THESE TWO FUNCTION TO cpModal for vendor specific code
var glyder_day_pass_cost = 1.15;
function glyder_vendor_page_redirect(vendor_id, item_id, item_href) {
	if (!jQuery.isEmptyObject(top.frames["demoframe"])) {
		top.frames["demoframe"].location = item_href;
	} else {
		window.location = item_href;
	}
}

function glyder_vendor_page_show(vendor_id, item_id) {
	// TODO: Might need different behavior for different vendor/item combo
	$('#page_content').show();
}

// Call loadModals to load vendor specific dialogs.
loadModals();

$('#div_daypass_cost').html('$' + Number(glyder_day_pass_cost).toFixed(2));

function glyder_check(vendor_id, item_id, item_href) {
	var user_id;
	if (localStorage) {
		console.log(localStorage);
		localStorage.setItem("current_vendor_id", vendor_id);
		localStorage.setItem("current_item_id", item_id);
		localStorage.setItem("current_item_href", item_href);
		if (localStorage["glyder_login"] && localStorage["glyder_login"] != "") {
			// Check if user already has access to the item. If so, send theme there.
			user_id = localStorage["glyder_login"];
			if (glyder_check_subscription(user_id, vendor_id) || glyder_check_item_purchased(user_id, vendor_id, item_id)) {
				glyder_show_or_redirect();
			} else {
				glyderReadItemData(function() {
					if (glyder_item_cost > 0.0000001) {
						$("#accessModal").modal("show");
					}
				});
			}
	    } else {
	        showLoginPage();
	    }
	} else {
		alert ('Please use an HTML5 compatible browser that supports localStorage.');
	}
}

function glyderShowPrepaidModal() {
	var prePaidModal = $("#prePaidModal");
	setTimeout(function(){prePaidModal.modal('hide')}, 3000);
	prePaidModal.modal('show');
}

function glyderShowPrepaidItem() {
	glyderShowPrepaidModal();
	glyder_show_or_redirect()
}

function glyder_check_subscription(user_id, vendor_id) {
	var valid_until = localStorage[user_id+'_'+vendor_id];
	var d = new Date();
	var n = Math.floor(d.getTime()/1000); // current time
	if (valid_until && valid_until >= n) {
		$('#div_access_message').html('Your account includes access to this premium content.');
		return true;
	}
	return false;
}

function glyder_check_item_purchased(user_id, vendor_id, item_id) {
	var valid_until = localStorage[user_id+'_'+vendor_id+'_'+item_id];
	if (valid_until && valid_until != "0") {
		$('#div_access_message').html('You previously bought this item.&nbsp; It&#39;s&nbsp;yours.');
		return true;				
	}
	return false;
}

function glyder_authorized(vendor_id, item_id) {
	var user_id;
	// TODO: Add check for items not present that do not require Glyder
	if (localStorage) {
		if (localStorage["glyder_login"] && localStorage["glyder_login"] != "") {
			// Check if user already has access to the item....
			user_id = localStorage["glyder_login"];
		    if (glyder_check_subscription(user_id, vendor_id) || glyder_check_item_purchased(user_id, vendor_id, item_id)) {
		    	glyderShowPrepaidItem();
		    	return true;
		    }
		}
	} else {
		alert ('Please use an HTML5 compatible browser that supports localStorage.');
	}
	return false;
};

function showBuyItem() {
	if (glyder_item_cost < 0.0000001) {
		return;
	}
	$('#div_item_cost').html('$' + glyder_item_cost);
	$("#accessModal").modal("show");
};

function showLoginPage() {
	//alert('show login modal vendor:' + vendor_id + ' item: ' + item_id);
	$("#signupModal").modal("hide");
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
				glyder_check(localStorage["current_vendor_id"], localStorage["current_item_id"], localStorage["current_item_href"]);
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
	// TODO: return false if payment process failed
	localStorage.setItem(localStorage["glyder_login"]+'_'+localStorage["current_vendor_id"]+'_'+localStorage["current_item_id"], "19999999999"); // Epoch Time
	$("#accessModal").modal("hide");
	return true;
}

function glyderBuyItemAndGo() {
	if (glyderBuyItem()) glyder_show_or_redirect();
	else alert("Buy item payment failed.");
}

function glyderBuyDaypass() {
	// TODO: return false is payment process failed
	var d = new Date();
	var n = Math.round(d.getTime()/1000) + 24*60*60; // validity time in seconds
	localStorage.setItem(localStorage["glyder_login"]+'_'+localStorage["current_vendor_id"], n); // Epoch Time
	$("#accessModal").modal("hide");
	return true;
}

function glyderBuyDaypassAndGo() {
	if (glyderBuyDaypass()) glyder_show_or_redirect();
	else alert("Buy day pass payment failed.");
}

function glyder_show_or_redirect() {
	if (!jQuery.isEmptyObject(localStorage["current_item_href"]) && localStorage["current_item_href"] != "undefined") {
		glyder_vendor_page_redirect(localStorage["current_vendor_id"], localStorage["current_item_id"], localStorage["current_item_href"]);
	} else {
		glyderShowPrepaidModal(); 
		glyder_vendor_page_show(localStorage["current_vendor_id"], localStorage["current_item_id"]);					
	}
}

function glyderReadItemData(callback_func) {
	// Reference: https://developers.google.com/chart/interactive/docs/querylanguage
	// https://developers.google.com/chart/interactive/docs/reference#dataparam
	var tq_query = "&tq=select * where";
	var gvizQuery;
	var vendor_id = localStorage["current_vendor_id"];
	var item_id = localStorage["current_item_id"];
	
	tq_query += " B = '" + vendor_id + "'";
	tq_query += " and C = '" + item_id + "'";
	gvizQuery = new google.visualization.Query(glyder_catalog_gsheet_url + tq_query);

	gvizQuery.send(function(response) {
		if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
		}

	  	var data = response.getDataTable();
	  	if (data.getNumberOfRows() < 1) {
	  		alert ("Vendor: " + vendor_id + ", Item: " + item_id + " does not exist in the catalog.");
	  	} else {
			glyder_item_cost = data.getValue(0,4);
			glyder_item_redirect_link = data.getValue(0,5);
			if (glyder_item_cost < 0.000001) {
				$('#div_access_message').html('Your account includes <strong>free&nbsp;access</strong> to this premium content.');				
			}
			$('#div_item_cost').html('$' + Number(glyder_item_cost).toFixed(2));
		}
		callback_func();
	});
}
