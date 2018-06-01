$(document).ready(function(){
	$('.choosegift img').on("click",function(){
		$('.mubu,.choose').removeClass('hidden');
	});
	$('.rulegift img').on("click",function(){
		$('.mubu,.rule').removeClass('hidden');
	});
	$('.confirm img').on("click",function(){
		$('.mubu,.rule').addClass('hidden');
	});
	$('.ball img').on('click',function(){
		$('.mubu,.choose,.choosegift,.rulegift').addClass('hidden');
		$("body").css('background-image','url("images/bodybg6.jpg")');
		$('.fivesince img').attr("src","images/ball.png");
		$('.buy,.fivesince').removeClass('hidden');
	})
	$('.cat img').on('click',function(){
		$('.mubu,.choose,.choosegift,.rulegift').addClass('hidden');
		$("body").css('background-image','url("images/bodybg6.jpg")');
		$('.fivesince img').attr("src","images/cat.png");
		$('.buy,.fivesince').removeClass('hidden');
	})
	$('.computer img').on('click',function(){
		$('.mubu,.choose,.choosegift,.rulegift').addClass('hidden');
		$("body").css('background-image','url("images/bodybg6.jpg")');
		$('.fivesince img').attr("src","images/computer.png");
		$('.buy,.fivesince').removeClass('hidden');
	})
	$('.book img').on('click',function(){
		$('.mubu,.choose,.choosegift,.rulegift').addClass('hidden');
		$("body").css('background-image','url("images/bodybg6.jpg")');
		$('.fivesince img').attr("src","images/book.png");
		$('.buy,.fivesince').removeClass('hidden');
	})
	$('.fruit img').on('click',function(){
		$('.mubu,.choose,.choosegift,.rulegift').addClass('hidden');
		$("body").css('background-image','url("images/bodybg6.jpg")');
		$('.fivesince img').attr("src","images/fruit.png");
		$('.buy,.fivesince').removeClass('hidden');
	})
	$('.buy img').on('click',function(){
		var i = $('.fivesince img').attr('src');
		var picname = i.substring(i.indexOf("/")+1,i.indexOf("."))+"bg";
		$('.buy,.fivesince').addClass('hidden');
		$("body").css('background-image','url("images/'+picname+'.jpg")');
		setTimeout(function(){
			$("body").css('background-image','url("images/bodybg4.jpg")');
			setTimeout(function(){
				$("body").css('background-image','url("images/bodybg3.jpg")');
				$('.getgift,.chooseagain').removeClass('hidden');
				$('.top').addClass('hidden');
			},2000);
		},2000);
	});
	$('.chooseagain img').on('click',function(){
		window.location.reload();
	})
	$('.getgift img').on('click',function(){
		$('.mubu').removeClass('hidden');
		$('.erweima').removeClass('hidden');
	});
	$('.mubu').on('click',function(){
		$('.choose,.rule,.erweima,.mubu').addClass('hidden');
	})
});