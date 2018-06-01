$(document).ready(function(){
	firstdh();
	$('.removesrc img').attr('src','')
	$('.choosegift img').on("click",function(){
		$('.mubu,.choose').removeClass('hidden');
	});
	$('.rulegift img').on("click",function(){
		$('.mubu,.rule').removeClass('hidden');
	});
	$('.confirm img').on("click",function(){
		$('.mubu,.rule').addClass('hidden');
	});

	$('.five img').on('click',function(){
		var i = $(this).attr('src');
		var picname = i.substring(i.indexOf("/")+1,i.indexOf("-"));
		$('.mubu,.choose,.choosegift,.rulegift,.firstpg').addClass('hidden');
		$('.fivesince img').attr("src","images/"+picname+".png");
		$('.secondpg').removeClass('hidden');
		setTimeout(function(){
			$('.fivesince img').fadeIn(3000);
			$('.toptext img').css({
				'-webkit-animation-name':'toptextgif',
				'-webkit-animation-duration':'1s',
				'-webkit-animation-timing-function':'linear',
				'-webkit-animation-iteration-count':'1',
				'-webkit-animation-fill-mode':'forwards'
			})
			$('.buybtn img').css({
				'-webkit-animation-name':'doudong',
				'-webkit-animation-duration':'0.8s',
				'-webkit-animation-timing-function':'linear',
				'-webkit-animation-iteration-count':'infinite',
			});
		},1000);
		$('.buybtn').fadeIn(1000);
		$('.buylogo img').css({
			'-webkit-animation-name':'buylogogif',
			'-webkit-animation-duration':'0.5s',
			'-webkit-animation-timing-function':'linear',
			'-webkit-animation-iteration-count':'infinite',
		})
		$('.bottontext img').css({
			'-webkit-animation-name':'bottontextgif',
			'-webkit-animation-duration':'0.8s',
			'-webkit-animation-timing-function':'linear',
			'-webkit-animation-iteration-count':'1',
			'-webkit-animation-fill-mode':'forwards'
		});
		// $('.buybtn').on('click',function(){
		// 	var i =$('.fivesince img').attr('src')
		// 	var picname ="."+i.substring(i.indexOf("/")+1,i.indexOf("."))+"pg";
		// 	$('.secondpg,.buybtn').addClass('hidden');
		// 	$(picname).removeClass('hidden');
		// })
	});
	$('.buybtn').on('click',function(){
		$('.fivesince img').css("display","none");
		var i =$('.fivesince img').attr('src');
		var picname ="."+i.substring(i.indexOf("/")+1,i.indexOf("."))+"pg";
		$('.secondpg,.buybtn').addClass('hidden');
		$(picname).removeClass('hidden');
		if(picname==".ballpg"){
			balldh();
		}else if(picname==".catpg"){
			catdh();
		}else if(picname==".computerpg"){
			computerdh();
		}else if(picname==".bookpg"){
			bookdh();
		}else {
			fruitdh();
		}
		setTimeout(function(){
			$(picname).addClass('hidden');
			$('.erguang').removeClass('hidden');
			// $('.removesrc img').attr('src','')
			erguang();
			setTimeout(function(){
				lastpg();
				$('.erguang').addClass('hidden');
				$('.lastpg').removeClass('hidden');
			},3000)
		},3000)
	})
	// $('.buybtn').on('click',function(){
	// 	var i =$('fivesince img').attr('src')
	// 	var picname = i.substring(i.indexOf("/")+1,i.indexOf(".")+'pg');
	// 	$('.secondpg,.buybtn').addClass('hidden');
	// 	$(picname).removeClass('hidden');
	// })
	$('.chooseagain img').on('click',function(){
		firstdh();
		$('.mubu,.choose,.firstpg').removeClass('hidden');
		$('.lastpg').addClass('hidden');
		$('.removesrc img').attr('src','')
	});
	$('.receivegif img').on('click',function(){
		$('.mubu').removeClass('hidden');
		$('.erweima').removeClass('hidden');
	})
	$('.mubu').on('click',function(){
		$('.choose,.rule,.erweima,.mubu').addClass('hidden');
	})
});


function firstdh(){
	setTimeout(function(){
		$('.publiccomputer img').animate({left:'-7%'});
		$('.publiccomputer img').css({'transform':'rotate(0deg)','transition':'transform 2s'});
		$('.publicball img').animate({left:'8%'},1000);
	},400)
	setTimeout(function(){
		$('.publiccat img').attr('src','images/publiccat.png')
		$('.forty img').attr('src','images/forty.png')
		$('.twentyfive img').attr('src','images/twentyfiv.png')
		$('.zhuti img').attr('src','images/firstpic1.png');
	},1000)
	$('.zhuti img').css({
		'-webkit-animation-name':'zhutigif',
		'-webkit-animation-duration':'1s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-delay':'0.8s',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.publiccat img').css({
		'-webkit-animation-name':'doudong',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'2',
		'-webkit-animation-delay':'0.8s'
	});
	$('.forty img').css({
		'-webkit-animation-name':'fortygif',
		'-webkit-animation-duration':'0.3s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'3',
		'-webkit-animation-delay':'0.8s'
	});
	$('.thirty img').animate({top:'10%'},1000);
	$('.twentyfive img').css({
		'-webkit-animation-name':'twentyfivegif',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-delay':'0.8s'
	});
}

function balldh(){
	$('.ballwhitetext img,.ballyellowtext img').css({
		'-webkit-animation-name':'bigsmall',
		'-webkit-animation-duration':'0.8s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	});
	$('.ballpikaqiu img').css({
		'-webkit-animation-name':'pkqgif',
		'-webkit-animation-duration':'1.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.ballstar img').css({
		'-webkit-animation-name':'stargif',
		'-webkit-animation-duration':'0.8s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'infinite',
		'-webkit-animation-fill-mode':'forwards'
	})
}

function catdh(){
	$('.cattext1 img').css({
		'-webkit-animation-name':'bigsmallbig',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'4',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.catgirl img').css({
		'-webkit-animation-name':'pkqgif',
		'-webkit-animation-duration':'1.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.cattext3 img').css({
		'-webkit-animation-name':'cattextgif',
		'-webkit-animation-duration':'1.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.cattext5 img').css({
		'-webkit-animation-name':'doudong',
		'-webkit-animation-duration':'1.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.cattext2 img').css({
		'-webkit-animation-name':'stargif',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'3',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.cattext4').css({
		'-webkit-animation-name':'youhuadong',
		'-webkit-animation-duration':'1s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	})
}

function computerdh(){
	$('.computerlogo img').css({
		'-webkit-animation-name':'computergif',
		'-webkit-animation-duration':'0.2s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	});
	$('.computergirl img').css({
		'-webkit-animation-name':'pkqgif',
		'-webkit-animation-duration':'1.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	});
	$('.computertext1 img').css({
		'-webkit-animation-name':'bigsmallbig',
		'-webkit-animation-duration':'0.3s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'4',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.computertext2 img').css({
		'-webkit-animation-name':'bigsmallbig',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'2',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.computertext3 img').css({
		'-webkit-animation-name':'computertextgif',
		'-webkit-animation-duration':'2s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	})
}

function bookdh(){
	$('.booktext1 img').css({
		'-webkit-animation-name':'bigsmallbig',
		'-webkit-animation-duration':'0.3s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'4',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.booktext3 img').css({
		'-webkit-animation-name':'bigsmallbig',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'2',
		'-webkit-animation-fill-mode':'forwards'
	})
	setTimeout(function(){
		$('.booktext4 img').attr('src','images/booktext4.png')
	},1000)
	$('.booktext4 img').css({
		'-webkit-animation-name':'doudong',
		'-webkit-animation-duration':'1s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.8s',
	})
	$('.booktext2 img').css({
		'-webkit-animation-name':'stargif',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'3',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.bookpic img').css({
		'-webkit-animation-name':'pkqgif',
		'-webkit-animation-duration':'1.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	});
	$('.booklogo img').css({
		'-webkit-animation-name':'bottontextgif',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	});
}


function fruitdh(){
	$('.fruitlufei img').css({
		'-webkit-animation-name':'pkqgif',
		'-webkit-animation-duration':'1.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards'
	});
	setTimeout(function(){
		$('.fruittext1 img').attr('src','images/fruittext1.png');
		$('.fruittext2 img').attr('src','images/fruittext2.png');
		$('.fruittext3 img').attr('src','images/fruittext3.png');
		$('.fruitchang1 img').attr('src','images/fruitchang1.png');
		$('.fruitchang2 img').attr('src','images/fruitchang2.png');
		$('.fruitchang3 img').attr('src','images/fruitchang3.png');
		$('.fruitchang4 img').attr('src','images/fruitchang4.png');
		$('.fruitchang5 img').attr('src','images/fruitchang5.png');
	},1000)
	$('.fruittext1 img,.fruittext2 img').css({
		'-webkit-animation-name':'bigsmallbig',
		'-webkit-animation-duration':'0.3s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'3',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.8s'
	});
	$('.fruittext3 img').css({
		'-webkit-animation-name':'buylogogif',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'3',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.8s'
	});
	$('.fruitchang1 img,.fruitchang2 img').css({
		'-webkit-animation-name':'stargif',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'3',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.8s'
	});
	$('.fruitchang3 img').css({
		'-webkit-animation-name':'doudong',
		'-webkit-animation-duration':'0.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.8s'
	});
	$('.fruitchang5 img').css({
		'-webkit-animation-name':'computergif',
		'-webkit-animation-duration':'0.1s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.8s'
	});
	$('.fruitchang4 img').css({
		'-webkit-animation-name':'changgif',
		'-webkit-animation-duration':'0.2s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.8s'
	});
}


function erguang(){
	setTimeout(function(){
		$('.pa1 img').attr('src','images/erguang1.png');
		$('.pa2 img').attr('src','images/erguang2.png');
		$('.pa3 img').attr('src','images/erguang3.png');
		$('.pa4 img').attr('src','images/erguang4.png');
		$('.pa6 img').attr('src','images/erguang6.png');
		$('.pa7 img').attr('src','images/erguang7.png');
		$('.pa8 img').attr('src','images/erguang8.png');
		$('.pa5 img').attr('src','images/erguang5.png');
	},1000);
	$('.gantan img').css({
		'-webkit-animation-name':'gantangif',
		'-webkit-animation-duration':'0.4s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'infinite',
		'-webkit-animation-fill-mode':'forwards'
	})
	$('.pa5 img').css({
		'-webkit-animation-name':'pa5gif',
		'-webkit-animation-duration':'2s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'1s'
	})
	$('.pa1 img').css({
		'-webkit-animation-name':'danrugif',
		'-webkit-animation-duration':'2s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.9s'
	})
	$('.pa2 img').css({
		'-webkit-animation-name':'danrugif',
		'-webkit-animation-duration':'1.6s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.9s'
	})
	$('.pa3 img').css({
		'-webkit-animation-name':'danrugif',
		'-webkit-animation-duration':'1.2s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.9s'
	})
	$('.pa4 img').css({
		'-webkit-animation-name':'danrugif',
		'-webkit-animation-duration':'1.5s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.9s'
	})
	$('.pa6 img').css({
		'-webkit-animation-name':'danrugif',
		'-webkit-animation-duration':'1.7s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.9s'
	})
	$('.pa7 img').css({
		'-webkit-animation-name':'danrugif',
		'-webkit-animation-duration':'1.3s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.9s'
	})
	$('.pa8 img').css({
		'-webkit-animation-name':'danrugif',
		'-webkit-animation-duration':'1s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.9s'
	})
}


function lastpg(){
	$('.chooseagain img,.receivegif img').css({
		'-webkit-animation-name':'doudong',
		'-webkit-animation-duration':'1s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'infinite',
		'-webkit-animation-fill-mode':'forwards',
	})
	setTimeout(function(){
		$('.lasttext1 img').attr('src','images/lastpagetext.png');
	},1000)
	$('.lasttext1 img').css({
		'-webkit-animation-name':'bigsmallbig',
		'-webkit-animation-duration':'0.3s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'3',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'0.8s'
	});
	$('.lasttext2 img,.lasttext3 img').css({
		'-webkit-animation-name':'lasttextgif',
		'-webkit-animation-duration':'0.3s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
	});
	$('.lastball img').css({
		'-webkit-animation-name':'lastballgif',
		'-webkit-animation-duration':'1s',
		'-webkit-animation-timing-function':'linear',
		'-webkit-animation-iteration-count':'1',
		'-webkit-animation-fill-mode':'forwards',
		'-webkit-animation-delay':'2s'
	})
}