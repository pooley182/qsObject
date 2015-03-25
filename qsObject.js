function qsObject(qs){
	qs = (typeof qs === "undefined") ? window.location.href.slice(window.location.href.indexOf('?') + 1) : qs.replace('?','');
	/* Create an array of name value pairs from query string. 
	[show_tabs=overview, highlight=1] */
	if ( qs === window.location.href ) {
		return false;
	}
	var qsArray = qs.split('#');
	var qsParams = qsArray[0].split('&');
	var qsAnchor = qsArray[1];
	var qsObj = {};
	for( i = 0; i < qsParams.length; ++i ){
		/*create name value pairs and add them to a querystring object.
		{"show_tabs":"overview", "highlight":"1"}*/
		var tempArr = qsParams[i].split('=');
		// test if the key already existsin the object.
		if( !(tempArr[0] in qsObj) ){
			//add key if it doesn't exist
			qsObj[tempArr[0]] = (typeof tempArr[1] === "undefined") ? "" : tempArr[1];
		} else {
			// test if the key's value is already an array (multiple values)
			if ( (typeof(qsObj[tempArr[0]] === "object") && (qsObj[tempArr[0]] instanceof Array) ) ){
				// add value to the key's array
				qsObj[tempArr[0]].push(tempArr[1]);
			} else {
				// convert the current single value to an array, then add the new value.
				qsObj[tempArr[0]] = [ qsObj[tempArr[0]], tempArr[1] ];
			}
		}
	};
	if(qsAnchor !== undefined && qsAnchor != ''){
		qsObj['Anchor'] = qsAnchor;
	}

	return qsObj;
}
