var metro={
		bind_nav:function(navname){
			var $nav = $("."+navname+" li");
			$nav.bind("click",function(){
				var _cid = this.id;
				if( $(this).find("a").attr("url") != '' &&  $(this).find("a").attr("url") != undefined) {
					window.parent.document.getElementById("mainFrame").src = $(this).find("a").attr("url");
					$nav.each(function(i,n){
						_cid==n.id? $(n).addClass("active"):$(n).removeClass("active");
					});
				}
			});
		}
	};