
やったことメモ
ルーティングの仕組み


loader
action
context
jotai atom
ssr 


## 適当　メモ

- routes/_index.tsxは、「ルート/」のルーティング

- routes/todo.tsx と routes/todo/route.tsxは同じ意味で、「ルート/todo」 のルーティング

- routes/todo._index は/todoだが、routes/todo.indexは /todo/index にルーティングされる

- actionやloaderはブラウザからのリクエストを受け取ってサーバーサイドで実行されるのに対し、
  jsxのfucnctionの所（普通の中身）はブラウザ上で実行される

- 