$(document).ready(function(){$("#kw").click(function(){$("#search").addClass("quickdelate-wrap-focus")}),$("#kw").mouseout(function(){$("#search").removeClass("quickdelate-wrap-focus")}),$("#bri").mouseover(function(){$(".bdbri").css({opacity:"1",display:"block"})}),$(".bdbri").hover(function(){$(this).show();var n=0;$(window).bind("scroll",function(){var o=$(document).scrollTop();$("body").scrollTop(o>n?0:0),n=o})},function(){$(this).hide(),$(window).unbind("scroll")}),$(".s-code-nav").click(function(){$(".s-mblock-content").toggle(),$(".beforech").toggleClass("mine-title-icon-change")}),$("#btn").hover(function(){$(".icon-mask").css("display","block"),$("#btn .icon").css("display","none")},function(){$(".icon-mask").css("display","none"),$("#btn .icon").css("display","block")});var n=$("#s-menu-wrapper span"),o=$(".s-content");n.each(function(c){$(n[c]).click(function(){$(this).css("backgroundColor","#e8e8e8").siblings(".s-menu-item").css("backgroundColor","#fff"),$(o).eq(c).css("display","block").siblings(".s-content").css("display","none"),$("#s-menu-mine").css("backgroundColor","#fff"),$(".s-content-special").css("display","none")})}),$("#s-menu-mine").click(function(){$(this).css("backgroundColor","#e8e8e8"),$(n).css("backgroundColor","#fff"),$(o).css("display","none"),$(".s-content-special").css("display","block")}),$(".s-skin").click(function(){$("#bgimage").slideToggle(300)});var c=$("#mimage li img");$(c).hover(function(){$("#bgimage").show()},function(){$("#bgimage").hide()}),c.each(function(n){$(c[n]).click(function(){var n=$(this).attr("src");$("body").css({"background-image":"url("+n+")","background-size":"100% 100%"})})})}),window.onload=function(){var n=document.getElementById("btn"),o=null;window.onscroll=function(){var o=document.body.scrollTop;n.style.display=o>=100?"block":"none"},n.onclick=function(){o=setInterval(function(){var n=document.body.scrollTop,c=n/5;document.body.scrollTop=n-c,0==n&&clearInterval(o)},30)}};