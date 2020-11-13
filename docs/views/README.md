---
title: 概览
sidebar: false
date: 2020-05-20
sidebarDepth: 0
isShowComments: true
---
<love/>
<h1 style="text-align: center"><a href='/Blog/tag/'>随便看看</a></h1>

<div id="parent">
<div class="firstdiv" onclick="前端()">前端</div>
<div class="firstdiv" onclick="后端()">后端</div>
<div class="firstdiv" onclick="随笔()">随笔</div>
<div class="firstdiv" onclick="服务器()">服务器</div>
</div>
<script>
  function 前端() {
    window.location.href='/Blog/views/前端/js/'
  }
  function 后端() {
     window.location.href='/Blog/views/后端/java/'
  }
  function 随笔() {
     window.location.href='/Blog/views/随笔/'
  }
  function 随笔() {
     window.location.href='/Blog/views/服务器/'
  }
</script>
<style>
#parent{
  display: flex;
}
.firstdiv{
  flex: 1;
  border:2px solid #a1a1a1;
  padding:10px 40px;
  background:#ffffff;
  border-radius:25px;
  text-align:center;
  margin-left: 10px;
  margin-right: 10px;
}
.firstdiv{
  cursor: pointer;
  transition: all 0.5s;
}
.firstdiv:hover{
  transform: scale(1.2);
}

</style>


