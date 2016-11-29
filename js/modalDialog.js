function modalDialog(args){
	var _this = this ;  

	this.init = function(){
		var modalDialog = document.createElement('div') ;
		var modalDialogBg = document.createElement('div') ;
		var modalDialogBody = document.createElement('div') ;
		var modalDialogBodyHead = document.createElement('div') ;
		var modalDialogBodyHeadFull = document.createElement('a') ;
		var modalDialogBodyHeadTitle = document.createElement('div') ;
		var modalDialogBodyCon = document.createElement('div') ;
		modalDialog.setAttribute('class', 'modal-dialog') ;
		modalDialogBg.setAttribute('class', 'modal-dialog-bg') ;
		modalDialogBody.setAttribute('class', 'modal-dialog-body') ;
		modalDialogBodyHead.setAttribute('class', 'modal-dialog-body-head') ;
		modalDialogBodyHeadFull.setAttribute('class', 'modal-dialog-body-head-full') ;
		modalDialogBodyHeadTitle.setAttribute('class', 'modal-dialog-body-head-title') ;
		modalDialogBodyCon.setAttribute('class', 'modal-dialog-body-con') ;
		modalDialogBodyHeadFull.appendChild(document.createTextNode('放大')) ;

		eventUtils.addHandler(modalDialogBodyHeadFull, 'click', _this._full) ;
		eventUtils.addHandler(modalDialogBg, 'click', _this.close) ;

		modalDialog.appendChild(modalDialogBg) ;
		modalDialog.appendChild(modalDialogBody) ;
		modalDialogBody.appendChild(modalDialogBodyHead) ;
		modalDialogBody.appendChild(modalDialogBodyCon) ;
		modalDialogBodyHead.appendChild(modalDialogBodyHeadFull) ;
		modalDialogBodyHead.appendChild(modalDialogBodyHeadTitle) ;

		_this.modalDialogBodyHeadTitle = modalDialogBodyHeadTitle ;
		_this.modalDialogBodyCon = modalDialogBodyCon ;
		_this.modalDialogBody = modalDialogBody ;
		_this.modalDialog = modalDialog ;
	}

	//放大
	_this._full = function(){
		var target = eventUtils.getTarget(event) ;
		var windowInfo = getWindowInfo() ;
		var wWidth = windowInfo.width;
		var wHeight = windowInfo.height ;

		//保存当前宽高， 在缩小的时候使用
		_this.bodyWidth = 800;
		_this.bodyHeight = 600;

		var styles = {
			width: wWidth + 'px',
			height: wHeight + 'px',
			left: 0,
			top: 0,
			marginLeft: 0,
			marginTop: 0
		} ;
		for(var item in styles){
			_this.modalDialogBody.style[item] = styles[item] ;
		}

		_this.modalDialogBodyCon.style.height = (wHeight - 60) + 'px';

		target.innerHTML = '缩小' ;
		eventUtils.removeHandler(target, 'click', _this._full) ;
		eventUtils.addHandler(target, 'click', _this._portion) ;
	}

	//缩小
	_this._portion = function(){
		var target = eventUtils.getTarget(event) ;
		var styles = {
			width: _this.bodyWidth + 'px',
			height: _this.bodyHeight + 'px',
			left: '50%',
			top: '50%',
			marginLeft: -(_this.bodyWidth/2) + 'px',
			marginTop: -(_this.bodyHeight/2) + 'px'
		} ;
		for(var item in styles){
			_this.modalDialogBody.style[item] = styles[item];
		}
		_this.modalDialogBodyCon.style.height = (_this.bodyHeight - 60) + 'px';

		target.innerHTML = '放大';
		eventUtils.removeHandler(target, 'click', _this._portion) ;
		eventUtils.addHandler(target, 'click', _this._full) ;
	}

	this.show = function(title, content){
		title = title || '';
		content = content || '' ;
		_this.modalDialogBodyHeadTitle.innerHTML = title;
		_this.modalDialogBodyCon.innerHTML = content ;

		//执行显示
		document.body.appendChild(_this.modalDialog) ;
	}

	_this.close = function(){
		_this.modalDialog.parentNode.removeChild(_this.modalDialog) ;
	}

	this.init() ;

}