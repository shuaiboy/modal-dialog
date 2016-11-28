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



		modalDialog.appendChild(modalDialogBg) ;
		modalDialog.appendChild(modalDialogBody) ;
		modalDialogBody.appendChild(modalDialogBodyHead) ;
		modalDialogBody.appendChild(modalDialogBodyCon) ;
		modalDialogBodyHead.appendChild(modalDialogBodyHeadFull) ;
		modalDialogBodyHead.appendChild(modalDialogBodyHeadTitle) ;
		document.body.appendChild(modalDialog) ;

		_this.modalDialogBodyHeadTitle = modalDialogBodyHeadTitle ;
		_this.modalDialogBodyCon = modalDialogBodyCon ;
	}

	_this.close = function(){

	}

	//放大
	_this._full = function(){

	}

	//缩小
	_this._portion = function(){

	}

	this.show = function(title, content){
		_this.modalDialogBodyHeadTitle.innerHTML = title;
		_this.modalDialogBodyCon.innerHTML = content ;

		//执行显示
	}

	this.init() ;

}