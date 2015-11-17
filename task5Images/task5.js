function move(){
var btnMore = document.getElementById("btn-more");
var oWrap = document.getElementById("oWrap");
var f = false;
	btnMore.onclick= function(){
		if(f!=true){
			oWrap.style.transform="translateX(78.125%)";
			return f = true;
		}else{
			oWrap.style.transform="translateX(0px)";
			return f = false;
		}
	
    }
};
move();