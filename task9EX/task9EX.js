			var menu = document.getElementById("menu"),
		topList = document.getElementById("main-nav") ;
	var f = false;
	menu.onclick=function(){
		
		if(f != true){
			topList.style.transform="translateX(-50px)";
			topList.style.opacity="1";
			topList.style.zIndex="1";
			return f = true;
		}else{
			topList.style.transform="translateX(0px)";
			topList.style.opacity="0";
			topList.style.zIndex="0";
			return f = false;
		}
	}