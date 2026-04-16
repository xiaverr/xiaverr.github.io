var posts=["【CUDA-C】CUDA编程模型/","我的第一篇博客/","【CUDA-C】CUDA编程基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };