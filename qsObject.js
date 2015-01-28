function qsObject(qs){
	qs = (typeof qs === "undefined") ? window.location.href.slice(window.location.href.indexOf('?') + 1) : qs.replace('?','');
	/* Create an array of name value pairs from query string. 
	[show_tabs=overview, highlight=1] */
	if ( qs === window.location.href ) {
		return false;
	}
	var qsArray = qs.split('#');
	var qsParams = qsArray[0].split('&');
	var qsId = qsArray[1];
	var qsObj = {};
	for( i = 0; i < qsParams.length; ++i ){
		/*create name value pairs and add them to a querystring object.
		{"show_tabs":"overview", "highlight":"1"}*/
		var tempArr = qsParams[i].split('=');
		qsObj[tempArr[0]] = (typeof tempArr[1] === "undefined") ? "" : tempArr[1];
	};
	if(qsId !== 'undefined' && qsId !== ''){
		qsObj['Id'] = qsId;
	}

	return qsObj;
}