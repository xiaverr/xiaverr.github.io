var posts=["【CUDA-C】CUDA编程基础/","【CUDA-C】CUDA编程模型/","【cpp】多线程编程/","【mooncake】mooncake架构分析和代码解读/","我的第一篇博客/","【infra】vllm-lmcache-mooncake部署/","【Mooncake】Mooncake的使用方法/","【LMCache】LMCache使用指南/","【vLLM】vLLM使用指南/","【Mooncake】Mooncake使用指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };