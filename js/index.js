$(function(){
	$(".tupian>.container-fluid>.row").delegate(".tp>img","click",function(){
           var index=$(this).attr("alt");
           alert(index)
	})
})