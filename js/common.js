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
		event = event || window.event ;
		return event ;
	}
}