// 用户名不能为空
export function isNotNullForUserName (rule, value, callback) {
  if (!value) {
    return callback(new Error('用户名不能为空'));
  }

  setTimeout(function () {
    if (value.toString().split(" ").join("").length==0) {
      return callback(new Error('用户名不能为空'));
    } else {
      callback();
    }
  },0);
}

// 密码不能为空
export function isNotNullForPassWord(rule, value, callback) {
  if (!value) {
    return callback(new Error('密码不能为空'));
  }
  setTimeout(function () {
    if (value.toString().split(" ").join("").length == 0) {
      return callback(new Error('密码不能为空'));
    } else {
      callback();
    }
  },0);
}

// 匹配网址
export function isNetWork(rule, value, callback) {
  var reg = /^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/;
  setTimeout(function () {
    if (value.match(reg)) {
      return callback();
    } else {
      return new Error('请输入正确的网址!')
    }
  },0);
}

export function checkCode(rule,value,callback) {
  if (!value) {
    return callback(new Error('请输入验证码'))
  }
  setTimeout(function () {
    if(value){
      if(!Number(value)){
        return callback(new Error('验证码必须为数字'))
      }else{
        callback()
      }
    }else{
      callback()
    }
  },0);
}

export function checkPhoneNumber(rule,value,callback) {
  if (!value) {
    return callback(new Error('手机号不能为空'))
  }
  setTimeout(function () {
    if(value){
      if(!value.toString().match(/^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/)){
        return callback(new Error('手机号不正确'))
      }else{
        return callback()
      }
    }else{
      return callback()
    }
  },0);

}
