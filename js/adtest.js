var abTest = function(i, o) {
    this.id = i;
    this.offer = o;
    this.no = null;
    this.init();
};
abTest.prototype.init = function() {
    if(this.no === null){
        this.setCookie();
    } else {
        this.no = this.getCookie();
    }
};
abTest.prototype.getCookie = function() {
    var cookie_value;
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var str = cookies[i].split("=");
        if (str[0] == this.id) {
            cookie_value = unescape(str[1]);
            break;
        } else {
            cookie_value = 0;
        }
    }
    return parseInt(cookie_value);
};
abTest.prototype.setCookie = function() {
    var rand = Math.floor(Math.random() * this.offer.length);
    document.cookie = this.id + "=" + rand;
    this.no = rand;
};
abTest.prototype.htmlTest = function() {
    document.getElementById(this.offer[this.no]).style.display="block";
};
abTest.prototype.redirectTest = function() {
    location.href = this.offer[this.no];
};