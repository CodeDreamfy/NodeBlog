// +function(){
//   $.ajax('/news', {
//     dataType: 'json',
//     type: 'post',
//     success: function(data){
//       console.log(data);
//     }
//   })
// }()

//reg
+function(){
  var $form = $('#reg');
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var param = $(this).serialize().split("&");
    param = getParam(param);
    // console.log(param)
    if(param.username == '' || param.username.length <=4){
      alert("用户名不能为空且长度不能少于4位数！");
      return false;
    };
    if(param.password == '' || param.password.length <=4){
      alert("密码不能为空且长度不能少于4位数！");
      return false;
    };
    if(param.repassword == '' || param.password != param.repassword){
      alert("确认密码不能为空且两次输入需要相同！");
      return false;
    };


  });
}()

function getParam(str){
  var param = {};
  for(var i= 0; i<str.length; i++){
    var o = str[i].split("=");
    param[o[0]] = o[1];
  }
  return param;
}
