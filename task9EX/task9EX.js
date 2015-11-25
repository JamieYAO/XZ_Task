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


var carMove = $('.carMove'),
	car = $('.car'),
	carBack = $('.carBack');

carMove.each(function(){
	$(this).mouseover(function(){
		$(this).find('.car').css({'transform':'rotateY(180deg)','opacity':'0'});
		$(this).find('.carBack').css({'transform':'rotateY(360deg)','opacity':'1','height':$(this).find('.car').height()+'px'})
	})
})

carMove.each(function(){
	$(this).mouseout(function(){
		$(this).find('.car').css({'transform':'rotateY(0deg)','opacity':'1'});
		$(this).find('.carBack').css({'transform':'rotateY(180deg)','opacity':'0','height':'atuo'})
	})
})