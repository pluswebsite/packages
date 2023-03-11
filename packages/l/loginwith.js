class loginWith{
  constructor(key){
    this.key = key;
  }
  request(){
    var url = "https://pluswebsite.github.io/loginwith/?&key=" + key;
    window.open(url, '_blank').focus();
  }
}
