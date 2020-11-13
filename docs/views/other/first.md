---
title: 概览
sidebar: false
date: 2019-08-21
sidebarDepth: 0
isShowComments: true
---

<love/>
<sentence/>
<h1 style="text-align: center"><a href='/tag/'>随便看看</a></h1>

<div id="parent">
<div class="firstdiv" onclick="前端()">前端</div>
<div class="firstdiv" onclick="后端()">后端</div>
<div class="firstdiv" onclick="随笔()">随笔</div>
</div>
<script>
  function 前端() {
    window.location.href='/views/前端/JS/'
  }
  function 后端() {
     window.location.href='/views/rearEnd/java/'
  }
  function 随笔() {
     window.location.href='/views/随笔/'
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


