webpackJsonp([6,15],{226:function(t,e,o){e=t.exports=o(5)(),e.push([t.id,".v-modal{display:none}.el-select{width:81%}.rightbutton{margin-bottom:15px}.el-input__inner{border-style:solid;border-radius:4px;border:1px solid #bfd9cc}.el-input-group__append,.el-input-group__prepend{background-color:#149c4c;color:#fff;border:#149c4c}.el-message-box{border:1px solid #bfd9cc;color:#ff4949}","",{version:3,sources:["/./src/pages/deploy_platform/deploy.vue"],names:[],mappings:"AACA,SACE,YAAc,CACf,AACD,WACE,SAAW,CACZ,AACD,aACE,kBAAoB,CAIrB,AACD,iBACE,mBAAoB,AACpB,kBAAmB,AACnB,wBAAqC,CACtC,AACD,iDACE,yBAA0B,AAC1B,WAAa,AACb,cAAgB,CACjB,AACD,gBACE,yBAAqC,AACrC,aAAe,CAChB",file:"deploy.vue",sourcesContent:["\n.v-modal {\n  display: none;\n}\n.el-select {\n  width: 81%;\n}\n.rightbutton {\n  margin-bottom: 15px;\n  /*border: 1px solid rgb(191, 217, 204);*/\n  /*background-color: #149C4C;*/\n  /*color: white;*/\n}\n.el-input__inner {\n  border-style: solid;\n  border-radius: 4px;\n  border: 1px solid rgb(191, 217, 204);\n}\n.el-input-group__append, .el-input-group__prepend {\n  background-color: #149C4C;\n  color: white;\n  border: #149c4c;\n}\n.el-message-box {\n  border: 1px solid rgb(191, 217, 204);\n  color: #ff4949;\n}\n"],sourceRoot:"webpack://"}])},242:function(t,e,o){var r=o(226);"string"==typeof r&&(r=[[t.id,r,""]]);o(6)(r,{});r.locals&&(t.exports=r.locals)},303:function(t,e,o){o(242);var r=o(2)(o(387),o(333),null,null);t.exports=r.exports},333:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("hs-layout_auto",[o("div",{staticStyle:{"padding-top":"50px"}},[o("div",{staticClass:"tabs_class",staticStyle:{"background-color":"white"}},[o("el-card",{staticClass:"box-card"},[o("el-tabs",{attrs:{type:"border-card"}},[o("el-tab-pane",{attrs:{label:"DEPLOY"}},[o("div",{staticStyle:{"margin-top":"15px"}},[o("span",[o("router-link",{attrs:{to:{name:"012-1"}}},[o("el-button",{attrs:{type:"primary"}},[t._v("+  新建项目")])],1)],1),t._v(" "),o("div",{staticStyle:{"margin-bottom":"35px",width:"30%",float:"right"}},[o("el-input",{attrs:{placeholder:"请输入项目名称"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?void t.EnterName(t.input3):null}},model:{value:t.input3,callback:function(e){t.input3="string"==typeof e?e.trim():e},expression:"input3"}},[o("template",{slot:"prepend"},[t._v("项目名称搜索")])],2)],1)]),t._v(" "),o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.resForm,height:"650","default-sort":{prop:"id",order:"descending"}}},[o("el-table-column",{attrs:{prop:"id",label:"ID",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"type",label:"语言类型"}}),t._v(" "),o("el-table-column",{attrs:{prop:"",label:"线上版本"}}),t._v(" "),o("el-table-column",{attrs:{prop:"describe",label:"描述"}}),t._v(" "),o("el-table-column",{attrs:{prop:"server_port",label:"端口"}}),t._v(" "),o("el-table-column",{attrs:{prop:"created",label:"创建时间",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(o){t.clickDeploy(e.row)}}},[t._v("发布")]),t._v(" "),o("router-link",{attrs:{to:{name:"012",params:{id:e.row.id}}}},[o("el-button",{attrs:{size:"mini",type:"warning"}},[t._v("Manage")])],1)]}}])})],1)],1),t._v(" "),o("el-tab-pane",{attrs:{label:"OTHER"}})],1)],1)],1)]),t._v(" "),o("el-dialog",{attrs:{title:"发布",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-col",{staticClass:"dialog_title",attrs:{slot:"title"},slot:"title"},[o("span",[t._v("发布项目："+t._s(t.form.name))])]),t._v(" "),o("el-form",{attrs:{model:t.form}},[o("el-form-item",{attrs:{label:"代码版本","label-width":t.formLabelWidth,rules:[{required:!0,message:"代码版本不能为空"}]}},[o("el-select",{attrs:{placeholder:"请选择代码版本"},model:{value:t.form.branch,callback:function(e){t.$set(t.form,"branch",e)},expression:"form.branch"}},t._l(t.packageList,function(e){return o("el-option",{attrs:{label:e,value:e}},[t._v(t._s(e))])}))],1),t._v(" "),o("el-form-item",{attrs:{label:"部署路径","label-width":t.formLabelWidth}},[t._v("\n        "+t._s(t.resForms.server_path)+"\n      ")]),t._v(" "),o("el-form-item",{attrs:{label:"主机地址","label-width":t.formLabelWidth}},t._l(t.resHosts,function(e){return o("el-button",{attrs:{size:"mini",type:"info"}},[t._v(t._s(e.hostname))])}))],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.submitDeploy}},[t._v("立即发布")])],1)],1)],1)},staticRenderFns:[]}},387:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{formLabelWidth:"98px",dialogFormVisible:!1,packForm:"",packageList:"",packRes:{},form:{id:"",name:"",branch:"",host:"",server_path:""},resHosts:"",item_id:"",input3:"",tmp:[],activeNames:["1","2"],projectForm:{name:"",type:"",repository:"",branches:"",repos_user:"",builder:"",build_info_pom:"",bulid_info_param:"",project_env:[],dev_address:"",pro_address:"",describe:"创建用户"},resForm:"",resForms:"",enable_add:!1}},activated:function(){this.get_all_list()},methods:{get_all_list:function(){var t=this;console.log(this.deploy_api+"list/"),this.$http.get(this.deploy_api+"list/").then(function(e){t.resForm=e.data.data}).catch(function(t){console.log(t)})},clickDeploy:function(t){var e=this;this.dialogFormVisible=!this.dialogFormVisible,this.form.name=t.name,this.form.id=t.id,this.$http.get(this.deploy_api+"mod_item/",{params:this.form.id}).then(function(t){e.resForms=t.data.data[0],e.$http.post(e.deploy_api+"package_list/",e.resForms).then(function(t){e.packageList=t.data.data,e.packRes.project_url=t.data.url}).catch(function(t){console.log(t)}),t.data.hosts?(e.resHosts=t.data.hosts,e.form.host=t.data.hosts,e.form.server_path=t.data.data.server_path):(e.dialogFormVisible=!e.dialogFormVisible,e.$alert("This Project Not Host, Please Settings in Manage..."))}).catch(function(t){e.resForm="error",console.log(t)})},submitDeploy:function(){var t=this;if(0===this.form.branch.length)this.$alert("Please Choose Deploy Package...");else{for(var e in this.form.host)this.tmp.push(this.form.host[e].hostname);this.packRes.id=this.resForms.id,this.packRes.package_url=this.packRes.project_url+this.form.branch,this.packRes.host_list=this.tmp,this.packRes.client_path=this.resForms.server_path,this.packRes.client_port=this.resForms.server_port,this.packRes.project_name=this.resForms.name,this.packRes.package_name=this.form.branch,console.log("deployForm",this.packRes),this.$http.post(this.deploy_api+"run_deploy/",this.packRes).then(function(t){console.log(t.data)}).catch(function(e){console.log(e),t.$alert("My dear baby, back-end PythonAPI haven't written yet... ")})}},EnterName:function(t){var e=this;console.log("input",t),this.$http.get(this.deploy_api+"list/",{params:t}).then(function(t){e.resForm=t.data.data}).catch(function(t){console.log(t)})}}}}});
//# sourceMappingURL=6.cf703cbf4f06d98a3461.js.map