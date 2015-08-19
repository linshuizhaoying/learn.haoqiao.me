
<template lang="jade">
    #myModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='myModalLabel')
      .modal-dialog(role='document')
        .modal-content
          .modal-header
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
            h4#myModalLabel.modal-title {{modalTitle}}
          #modalBody.modal-body
            | {{modalContent}}
          .modal-footer
            button.btn.btn-info(type='button', data-dismiss='modal') 关闭
#wrapper.vue
  span.label 前端技能树学习
  .branch.lv1
    .entry
      span.btn.btn-info.label(v-on="click:getData" data="javascript" title="Javascript" data-toggle="modal" data-target="#myModal") Javascript
      .branch.lv2
        .entry
          span.btn.btn-success.label(v-on="click:getData" data="javascriptBook" title="Javascript书籍推荐" data-toggle="modal" data-target="#myModal") 书籍
        .entry
          span.btn.btn-success.label(v-on="click:getData" data="javascriptFrame" title="Javascript框架" data-toggle="modal" data-target="#myModal") 框架/库
          .branch.lv3
            .entry
              span.label Jquery
            .entry
              span.label BackBone
            .entry
              span.label React
            .entry
              span.label Vue.js
            .entry
              span.label Avalon
        .entry
          span.btn.btn-success.label(v-on="click:getData" data="javascriptBase" title="Javascript原生基础" data-toggle="modal" data-target="#myModal") 原生JS
    .entry
      span.btn.btn-info.label(v-on="click:getData" data="Css3" title="Css3" data-toggle="modal" data-target="#myModal")  Css3
      .branch.lv2
        .entry
          span.btn.btn-success.label(v-on="click:getData" data="Css3Book" title="Css3书籍推荐" data-toggle="modal" data-target="#myModal") 书籍
        .entry
          span.label Sass
    .entry
      span.btn.btn-info.label(v-on="click:getData" data="FrontEndAuto" title="前端自动化流程" data-toggle="modal" data-target="#myModal") 前端自动化
      .branch.lv2
        .entry
          span.label Gulp
        .entry
          span.label Webpack
        .entry
          span.label Fis
    .entry
      span.btn.btn-info.label(v-on="click:getData" data="NodeJs" title="Node.Js学习" data-toggle="modal" data-target="#myModal") Node.js
      .branch.lv2
        .entry.sole
          span.btn.btn-success.label(v-on="click:getData" data="NodeJsBook" title="Node.Js书籍推荐" data-toggle="modal" data-target="#myModal") 书籍

</template>

<script>

var markdown = require( "markdown" ).markdown;
console.log( markdown.toHTML( "Hello *World*!" ) );
module.exports = {
  data: function () {
    return {
      modalTitle: '被你发现咯' ,
      modalContent:'QQ:4799109 验证:YHQ'
    }
  },

  methods:{
	  SetData:function(PathUrl){
	      // GET request
	      $.get('../../../source/' + PathUrl + '.md',function(data){
	
					document.getElementById("modalBody").innerHTML = markdown.toHTML(data);

	      })
	
	  },
    getData:function(e){
	    var modaltitile = e.target.attributes.getNamedItem('title').value;
	    var PathUrl = e.target.attributes.getNamedItem('data').value;
	    this.modalTitle = modaltitile;
			this.SetData(PathUrl);
    }
  }
}
</script>

