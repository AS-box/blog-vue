# ローカルでブログを確認する方法。

プロジェクトをクローンする

`git clone git@github.com:AS-box/blog-vue.git`

package.jsonがあるディレクトリまで移動

下記コマンド

`npm run serve`

`json-server --watch db.json`

# 使用しているもの


* vue.js
* vuex
* vue-router
* json-server
* scss
* HTML5

# 実装した機能
* 記事を一覧でカード式で表示する。
* ハンバーガーメニューから記事をカテゴリーで絞り込み。
* 記事投稿画面から記事作成。(/create)

# 難しかったところ
* 設計の技術が甘く、画面の読み込みが複数回起きたりした。
* 特に、ハンバーガーメニューの絞り込みがうまくいかず苦労したが
* vuexの仕様を読み直し、リファクタリングすることで解消できた。





