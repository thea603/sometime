$(function(){
	$('#dowebok').fullpage({
		'anchors':['1', '2','3','4','5'],
				'sectionsColor':['#0076ca', '#0076ca','#0076ca',"#0076ca","#0076ca"],
				loopHorizontal:false,/*右滑动箭头*/
				afterRender: function(index){
					if(index==2){
					 // $('.content-out').addClass('content-outs');
					 $('.content-in').addClass('content-ins')
						}
				},
				afterLoad: function(anchorLink, index){
					if(index==1){	
					// timedMsg();						
					}else
					if(index==2){
						 // $('.content-out').addClass('content-outs');
						 $('.content-in').addClass('content-ins');
						}
					else if (index==3){
						 $('.page21').addClass('page21_animation');
						 $('.page22').addClass('page22_animation');
						 $('.page23').addClass('page23_animation');	
						 $('.page24').addClass('page24_animation');
						 $('.page25').addClass('page25_animation');
						 $('.page26').addClass('page26_animation');
						 $('.page27').addClass('page27_animation');
					
						$('.page41').addClass('page41_animation');
						$('.page42').addClass('page42_animation');
						$('.page43').addClass('page43_animation');
						$('.page44').addClass('page44_animation');
						$('.page45').addClass('page45_animation');
						$('.page46').addClass('page46_animation');
					}
					else if(index==3/1){
						alert(124);
					}
					else if(index==4){
						$('.page5_content').addClass('page5_content_animation');
						$('.content_pic').addClass('content_pic_animatioin');
						$('.rocket2').addClass('rocket2_animation');
						$('.page5_footer').addClass('page5_footer_animation')					}
				},
				onLeave:function(index,nextIndex,direction){
					if(index==2){
						 // $('.content-out').removeClass('content-outs');
						 $('.content-in').removeClass('content-ins')
						}
					else if(index==3){
						 $('.page21').removeClass('page21_animation');
						 $('.page22').removeClass('page22_animation');
						 $('.page23').removeClass('page23_animation');	
						 $('.page24').removeClass('page24_animation');
						 $('.page25').removeClass('page25_animation');
						 $('.page26').removeClass('page26_animation');
						 $('.page27').removeClass('page27_animation');
	
						 $('.page41').removeClass('page41_animation');
						 $('.page42').removeClass('page42_animation');
						 $('.page43').removeClass('page43_animation');
						 $('.page44').removeClass('page44_animation');
						 $('.page45').removeClass('page45_animation');
						 $('.page46').removeClass('page46_animation');
					}
					else if(index==4){
						$('.page5_content').removeClass('page5_content_animation');
						$('.content_pic').removeClass('content_pic_animatioin');
						$('.rocket2').removeClass('rocket2_animation');
						$('.page5_footer').removeClass('page5_footer_animation');	
					}
				}
		})
			})
