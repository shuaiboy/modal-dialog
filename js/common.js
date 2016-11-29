var eventUtils = {
	addHandler: function(elem, type, func){
		if(elem.addEventListener){
			elem.addEventListener(type, func, false) ;
		}else if(elem.attachEvent){
			elem.attachEvent('on' + type, func) ;
		}else{
			elem['on' + type] = func ;
		}
	},

	removeHandler: function(elem, type, func){
		if(elem.removeEventListener){
			elem.removeEventListener(type, func) ;
		}else if(elem.detachEvent){
			elem.detachEvent('on' + type, func) ;
		}else{
			elem['on' + type] = null ;
		}
	},

	getEvent: function(event){
		var event = event || window.event ;
		return event ;
	},

	getTarget: function(e){
		var event = eventUtils.getEvent(e) ;
		var target = event.target || event.srcElement ;
		return target;
	}
}

function getWindowInfo(){
	return {
		width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}
}