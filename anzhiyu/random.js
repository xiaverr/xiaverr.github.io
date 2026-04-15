var posts=["My-First-Hexo-Blog/","【CUDA-C】CUDA编程模型/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };