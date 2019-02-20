(function(global) {

var ajaxUtils={};
function getRequestObject(){
	if(window.XMLHttpRequest){
		return (new XMLHttpRequest());
	}
	else if (window.ActiveXObject){
     
         return(new ActiveXObject("Microsoft.XMLHTTP"));

	}
	else{
		global.alert("Ajax is not supported!");
		return(null)
	}
}




ajaxUtils.sendGetRequest= function(requestURL, responseHandler) {
	var request=getRequestObject();
	request.onreadystatechange= function() {
		handleResponse(request, responseHandler);
	};
	request.open("GET",requestURL, true);
	request.send(null);

};

//only calls user provided 'responseHandler'
//function if response is ready
//and not an error
function handleResponse(request,responseHandler) {
	if((request.readyState==4)&&
       (request.status==200)) {
		responseHandler(request);
	}
}
//expose utility to the global object
global.$ajaxUtils=ajaxUtils;

})(window);