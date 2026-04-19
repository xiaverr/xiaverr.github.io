var posts=["【CUDA-C】CUDA编程基础/","【CUDA-C】CUDA编程模型/","【mooncake】mooncake架构分析和代码解读/","我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };