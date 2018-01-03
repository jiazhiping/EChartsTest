function openWindow(url, title){
	/**
	var w = window.open(url,title,"location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes");
	w.focus();
	*/
	var width = window.screen.availWidth; // 获得窗口的水平位置
	var height = window.screen.availHeight; // 获得窗口的垂直位置
	var w = window.open(url,title,"width="+width+",height="+height
			+",top=0,left=0,location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes");
	w.focus();
}

//关闭窗口
function closeWindow() {
	if (navigator.userAgent.indexOf("MSIE") > 0) {
		if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
			window.opener = null;
			window.close();
		} else {
			window.open('', '_top');
			window.top.close();
		}
	} else if (navigator.userAgent.indexOf("Firefox") > 0
			|| navigator.userAgent.indexOf("Chrome") > 0) {
		window.location.href = "about:blank";
		window.close();
	} else {
		window.opener = null;
		window.open('', '_self');
		window.close();
	}
}

/*
 * 获取radio选中记录ID
 * 
 */
function getIdByRadio(radioName){
	var radio = $("input[name='"+radioName+"']:checked");
	if(radio.length == undefined || radio.length == 0){
		tips("请选择需要操作的记录！");
		return false;
	}else{
		return radio.val();
	}
}

/*
 * 获取checkbox单选选中记录ID
 * param: checkbox元素的name属性值
 */
function getIdByCheckbox(checkboxName){
	var checkbox = $("input[name='"+checkboxName+"']:checked");
	if(checkbox.length < 1){
		alert("请选择需要操作的记录！");
		return false;
	}
	if(checkbox.length > 1){
		alert("只能选择一条记录！");
		return false;
	}
	if(checkboxName!=undefined && checkboxName != ""){
		return checkbox.val();
	}
}

/**
  * 获取checkbox多选选中记录ID
  * param: checkbox元素的name属性值
  */
function getIdsByCheckbox(checkboxName){
	var ids = "";
	var checkboxs = $("input[name='"+checkboxName+"']:checked");
	if(checkboxs.length < 1){
		alert("请选择需要操作的记录！");
		return false;
	}
	checkboxs.each(function(idx,obj){
		ids += $(obj).val()+",";
	});
	ids = ids.substr(0,ids.length-1);
	return ids;
}