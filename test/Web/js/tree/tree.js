$(function() {
	$.tree = function(data) {
		for (var i = 0; i < data.length; i++) {
			var data2 = data[i];
			var clickStr = "";
			if (data[i].click != false) {
				clickStr = "ondblclick='treeOnclick(this)'";
			}
			if (data[i].icon == "icon-th") {
				$("#rootUL").append(
						"<li data-name='" + data[i].code + "' isParent='"
								+ data[i].isParent + "'><span " + clickStr
								+ " treeId='" + data[i].id + "' treeName='"
								+ data[i].name + "'><i class='" + data[i].icon
								+ "'></i> " + data[i].name + "</span></li>");
			} else {
				var children = $("li[data-name='" + data[i].parentCode + "']")
						.children("ul");
				if (children.length == 0) {
					$("li[data-name='" + data[i].parentCode + "']").append(
							"<ul></ul>")
				}
				$("li[data-name='" + data[i].parentCode + "'] > ul").append(
						"<li data-name='" + data[i].code + "'>" + "<span "
								+ clickStr + " treeId='" + data[i].id
								+ "' treeName='" + data[i].name + "'>"
								+ "<i class='" + data[i].icon + "'></i> "
								+ data[i].name + "</span>" + "</li>")
			}

			for (var j = 0; j < data[i].child.length; j++) {
				var child = data[i].child[j];
				if (child.click != false) {
					clickStr = "ondblclick='treeOnclick(this)'";
				}
				var children = $("li[data-name='" + child.parentCode + "']")
						.children("ul");
				if (children.length == 0) {
					$("li[data-name='" + child.parentCode + "']").append(
							"<ul></ul>")
				}
				$("li[data-name='" + child.parentCode + "'] > ul").append(
						"<li data-name='" + child.code + "'>" + "<span "
								+ clickStr + " treeId='" + child.id
								+ "' treeName='" + child.name + "'>"
								+ "<i class='" + child.icon + "'></i> "
								+ child.name + "</span>" + "</li>")
				var child2 = data[i].child[j].child;
				$.tree(child2)
			}
			$.tree(data[i]);
		}
	}
});