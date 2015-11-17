var Carousel = {
	init:function(){
		this.attachEl();
		this.bind();
		this.autoPlay();
	},

	attachEl:function(){
		var $c = this.$c = $('.mod-carousel');
		this.$prev = $c.find('.prev');
		this.$next = $c.find('.next');
		this.$nav = $c.find('.nav');
		this.$circles = $c.find('.circle');
		this.$imgUl = $c.find('.content ul');
		this.imgW = this.$imgUl.find('li').outerWidth(true);
		this.idx = 0; 
	},

	bind:function(){
		var me = this;
		this.$prev.on('click',function(){
			me.goPrev()
		})
		this.$next.on('click',function(){
			me.goNext()
		});
		this.$circles.on('click',function(){
			var activeIdx = me.$nav.find('.active').parent().index();
			    curIdx = $(this).parent().index();
			if(activeIdx > curIdx){
				me.goPrev(activeIdx - curIdx)
			};
			if(activeIdx < curIdx){
				me.goNext(curIdx - activeIdx)
			};
		})
	},

	goPrev:function(i){
        i = i||1;
        var me = this;
        this.$imgUl.css({'left': - (i*this.imgW)});
        for(var k=0 ; k<i ; k++){
        	this.$imgUl.find('li').first().before(this.$imgUl.find('li').last())
        };
        this.$imgUl.animate({'left': 0}, 400 , function(){
             me.setIndex(me.$imgUl.find('li').first().attr('data-idx'))
        })
	},

	goNext:function(i){
		i = i||1;
		var me = this;
		this.$imgUl.animate({'left': - (i*this.imgW)},400 ,function(){
			me.$imgUl.find('li').last().after(me.$imgUl.find('li').first());
            me.$imgUl.css({'left': 0});
            me.setIndex(me.$imgUl.find('li').first().attr('data-idx'));
            console.log('next')
		})
	},

	setIndex:function(idx){
		this.idx = idx;
		this.setNavStyle(this.idx)
	},

	setNavStyle:function(idx){
		this.$circles.removeClass('active')
		.eq(idx).addClass('active')
	},

	autoPlay:function(){
		var me = this;
		setInterval(function(){
			me.goNext()
		},3000)
	}
};

Carousel.init()