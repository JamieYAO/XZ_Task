		$(document).ready(function() {

			
			setTimeout("$('.fontMove').addClass('topFont').css('display','block')",3000);

	    	$('#pagepiling').pagepiling({
	    		menu: null,
	    		anchors: ['page1', 'page2', 'page3'],
			    sectionsColor: ['#282D01', '#2ebe21', '#2C3E50', '#51bec4'],
			    navigation:{
			            'textColor': '#000',
			            'bulletsColor': '#000',
			            'position': 'right',
			            'tooltips': ['个人信息', '我的技能', '练习项目' ]
			    },
			    onLeave: function(index, nextIndex, direction){
			    	if(index == 1){
						//moving the image
						$('#section1').find('.intro').delay(100).animate({
							left: '-100%'
						}, 1500, 'easeOutExpo', function(){
							$('#section1').find('h1').css('display','none');
								$('#section1').find('p').first().css('display','none');
									$('#section1').find('p').last().css('display','none');			
						});
					};

					if(index == 2){
						//section 2
						for(var i=0;i<7;i++){
						$('#section2').find('.box').eq(i).removeClass('animation'+i).css('opacity','0')
						
						}
					};

					if(index == 3){
					$('#section3').find('.intro').delay(100).animate({
							left: '-100%'}, 1500, 'easeOutExpo')
					}

			    },
			    afterRender: function(){
			    	
			    },
			    afterLoad: function(anchorLink, index){

			    	//section 1
					if(index == 1){
						console.log('aaa');
						//moving the image
						$('#section1').find('.intro').delay(100).animate({
							left: '0%'
						}, 1500, 'easeOutExpo', function(){
							$('#section1').find('h1').fadeIn(700, function(){
								$('#section1').find('p').first().fadeIn(600,function(){
									$('#section1').find('p').last().fadeIn(500)
								});
							});
						});


					}

					//section 2
					if(index == 2){
						//section 2
						for(var i=0;i<7;i++){
						$('#section2').find('.box').eq(i).addClass('animation'+i).css('opacity','1')
						
						}
					};

					//section 3
					if(anchorLink == 'page3'){
						//section 3
						$('#section3').find('.intro').delay(100).animate({
								left: '0%'
						}, 1500, 'easeOutExpo');
					}

					
			    }
			});
	    });