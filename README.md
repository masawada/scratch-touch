# Scratch Touch #

Scratchでは外部センサーを使うことが出来ます。これは、iPhoneをセンサー代わりにするデモです。

## 必要なもの ##
* iPhone (iPod touch)
* Node
* npm
* Scratch

iPhoneをLAN経由でPCにつなぎ、NodeがScratchとiPhoneの間を仲介します。
Nodeとnpmを前もってインストールしてください。
（MacでNodeを扱うならHomebrewがオススメです。）

## 使い方 ##
+ Nodeとnpmをインストールしましょう
+ ターミナル（端末・コマンドプロンプト）から以下のコマンドを入力します
    git://github.com/masawada/scratch-touch.git
    cd scratch-touch
    npm install express jade socket.io
    node app.js
+ Scratchを起動します
+ 遠隔センサー接続をオンにします
+ iPhoneのSafariから"http://PCの(LAN)IPアドレス:3000/"にアクセスしてください
+ この画面を「ホーム画面に追加」して再度起動するとフルスクリーンモードで遊べます

Scratch Touchをテストするために簡単なプロジェクトを作りました - [こちら](http://scratch.mit.edu/projects/masawada/2355353)からどうぞ

### 遠隔センサー接続をオンにする方法 ###
+ Scratchを起動します
+ "調べる"ボタンをクリックします
+ "スライダーセンサーの値"を右クリックします
+ "遠隔センサー接続を有効にする"をクリックします

## ライセンス ##
MIT License
