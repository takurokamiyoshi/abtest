#abtest.js
Cookie（セッション）で出し分けできるABテストJavaScriptライブラリです。
・html表示・非表示ABテスト
・リダイレクトABテスト
ができます。
##導入方法
###html表示・非表示ABテスト
・各パターンの要素を表示状態で記述します。
<div id="test1a" style="display: none;"><a href="#">あなたにおすすめ！！</a></div>
<div id="test1b" style="display: none;"><a href="#">みんなに人気！！</a></div>
・</body>直前でabtest.jsと
下記jsを読み込みます。
(function(){
    // html表示・非表示ABテスト
    // 第1引数:CookieId
    // 第2引数:各パターン要素のId
    var test1 = new abTest('test1', ['test1a','test1b']);
    test1.htmlTest();
})();
###リダイレクトABテスト
・<body>直下でabtest.jsと
下記jsを読み込みます。
(function(){
    // リダイレクトABテスト
    // 第1引数:CookieId
    // 第2引数:各パターンリダイレクト先URL
    var test2 = new abTest('test2', ['http://www.takurokamiyoshi.net/','http://www.takurokamiyoshi.net/blog/']);
    test2.redirectTest();
})();
##計測方法
セッション数、コンバージョン等の測定はアクセス解析ツール（Google Analytics等）を使用して下さい。
各パターンのセッション数は対象ページセッション数/パターン数で良いと思います。
##課題
・アクセス解析ツールに合わせてCookieの有効期限を変えれるようにしたほうが良い。
・JavaScriptのランダム関数を使用したり、実装側と計測側が違う仕組みなため精度は悪い。