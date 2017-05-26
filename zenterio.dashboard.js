
(function() {

    /**
     * Returns an associative arrays with key-value pairs based on the
     * query string part of an url.
     * If no search string is provided, it uses an empty string.
     * Multiple uses of a key results in all the associated values being saved in
     * a single array associated with that key.
     *
     * @param {string} [searchStr] Search string
     *
     * @returns {Object} Object of search string key-value parameters.
     */
    function getQueryStringParams() {

	var searchStr = window.location.search
	// If search string not set, empty search string.
	if (typeof searchStr === 'undefined') {
	    searchStr = "?";
	}
	var match;
	var pl = /\+/g;  // Regex for replacing addition symbol with a space
	var search = /([^&=]+)=?([^&]*)/g;
	var decode = function(s) {
	    return decodeURIComponent(s.replace(pl, " "));
	};
	var query = searchStr.substring(1);
	var result = {};
	var key = "";
	var value = "";

	while ((match = search.exec(query))) {
	    key = decode(match[1]);
	    value = decode(match[2]);
	    value = convertURLValue(value)
	    if (key in result) {
		var oldValue = result[key];
		if (oldValue instanceof Array) {
		    oldValue.push(value);
		} else {
		    result[key] = [oldValue, value];
		}
	    } else {
		result[key] = value;
	    }

	}
	return result;
    }

    function convertURLValue(value) {
	switch (value.toLowerCase()) {
	case "false":
	    return false;
	case "true":
	    return true;
	}
	if (! isNaN(value)) {
	    return +value // Converts to a number
	}
	return value
    }

    function dashBoardMode(e) {
	AJS.$('#footer').hide();
	AJS.$('#header').hide();
	AJS.$('#announcement-banner').hide();
	AJS.$('div#dashboard').find('ul.dashboard-tabs').hide();
	AJS.$('div#dashboard').css('margin-left', '0px');
	AJS.$('div#dashboard-content').css('margin-left', '0px');
	AJS.$('div#dashboard-content').find('div.aui-page-header').hide();
	AJS.$('div#dashboard-content').css('margin-top', '10px');
    }
    
    var cfg = getQueryStringParams();
    if (cfg.zenterioDashboardMode == true) {
	AJS.$(document).ready(dashBoardMode);
    }
    
})();
