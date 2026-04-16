var posts=["【CUDA-C】CUDA编程模型/","我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };