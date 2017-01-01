!function(){CKEDITOR.dialog.add("link",function(e){var t,n=CKEDITOR.plugins.link,i=function(){var t=this.getDialog(),n=t.getContentElement("target","popupFeatures"),t=t.getContentElement("target","linkTargetName"),i=this.getValue();if(n&&t)switch(n=n.getElement(),n.hide(),t.setValue(""),i){case"frame":t.setLabel(e.lang.link.targetFrameName),t.getElement().show();break;case"popup":n.show(),t.setLabel(e.lang.link.targetPopupName),t.getElement().show();break;default:t.setValue(i),t.getElement().hide()}},o=function(e){e.target&&this.setValue(e.target[this.id]||"")},a=function(e){e.advanced&&this.setValue(e.advanced[this.id]||"")},r=function(e){e.target||(e.target={}),e.target[this.id]=this.getValue()||""},s=function(e){e.advanced||(e.advanced={}),e.advanced[this.id]=this.getValue()||""},l=e.lang.common,d=e.lang.link;return{title:d.title,minWidth:350,minHeight:230,contents:[{id:"info",label:d.info,title:d.info,elements:[{id:"linkType",type:"select",label:d.type,"default":"url",items:[[d.toUrl,"url"],[d.toAnchor,"anchor"],[d.toEmail,"email"]],onChange:function(){var t=this.getDialog(),n=["urlOptions","anchorOptions","emailOptions"],i=this.getValue(),o=t.definition.getContents("upload"),o=o&&o.hidden;for("url"==i?(e.config.linkShowTargetTab&&t.showPage("target"),o||t.showPage("upload")):(t.hidePage("target"),o||t.hidePage("upload")),o=0;o<n.length;o++){var a=t.getContentElement("info",n[o]);a&&(a=a.getElement().getParent().getParent(),n[o]==i+"Options"?a.show():a.hide())}t.layout()},setup:function(e){this.setValue(e.type||"url")},commit:function(e){e.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:l.protocol,"default":"http://",items:[["http://\u200e","http://"],["https://\u200e","https://"],["ftp://\u200e","ftp://"],["news://\u200e","news://"],[d.other,""]],setup:function(e){e.url&&this.setValue(e.url.protocol||"")},commit:function(e){e.url||(e.url={}),e.url.protocol=this.getValue()}},{type:"text",id:"url",label:l.url,required:!0,onLoad:function(){this.allowOnChange=!0},onKeyUp:function(){this.allowOnChange=!1;var e=this.getDialog().getContentElement("info","protocol"),t=this.getValue(),n=/^((javascript:)|[#\/\.\?])/i,i=/^(http|https|ftp|news):\/\/(?=.)/i.exec(t);i?(this.setValue(t.substr(i[0].length)),e.setValue(i[0].toLowerCase())):n.test(t)&&e.setValue(""),this.allowOnChange=!0},onChange:function(){this.allowOnChange&&this.onKeyUp()},validate:function(){var t=this.getDialog();return!(!t.getContentElement("info","linkType")||"url"==t.getValueOf("info","linkType"))||(!e.config.linkJavaScriptLinksAllowed&&/javascript\:/.test(this.getValue())?(alert(l.invalidValue),!1):!!this.getDialog().fakeObj||CKEDITOR.dialog.validate.notEmpty(d.noUrl).apply(this))},setup:function(e){this.allowOnChange=!1,e.url&&this.setValue(e.url.url),this.allowOnChange=!0},commit:function(e){this.onChange(),e.url||(e.url={}),e.url.url=this.getValue(),this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:l.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:d.selectAnchor,setup:function(){t=n.getEditorAnchors(e),this.getElement()[t&&t.length?"show":"hide"]()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:d.anchorName,style:"width: 100%;",items:[[""]],setup:function(e){if(this.clear(),this.add(""),t)for(var n=0;n<t.length;n++)t[n].name&&this.add(t[n].name);e.anchor&&this.setValue(e.anchor.name),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.focus()},commit:function(e){e.anchor||(e.anchor={}),e.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:d.anchorId,style:"width: 100%;",items:[[""]],setup:function(e){if(this.clear(),this.add(""),t)for(var n=0;n<t.length;n++)t[n].id&&this.add(t[n].id);e.anchor&&this.setValue(e.anchor.id)},commit:function(e){e.anchor||(e.anchor={}),e.anchor.id=this.getValue()}}],setup:function(){this.getElement()[t&&t.length?"show":"hide"]()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(d.noAnchors)+"</div>",focus:!0,setup:function(){this.getElement()[t&&t.length?"hide":"show"]()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:d.emailAddress,required:!0,validate:function(){var e=this.getDialog();return!e.getContentElement("info","linkType")||"email"!=e.getValueOf("info","linkType")||CKEDITOR.dialog.validate.notEmpty(d.noEmail).apply(this)},setup:function(e){e.email&&this.setValue(e.email.address),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.select()},commit:function(e){e.email||(e.email={}),e.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:d.emailSubject,setup:function(e){e.email&&this.setValue(e.email.subject)},commit:function(e){e.email||(e.email={}),e.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:d.emailBody,rows:3,"default":"",setup:function(e){e.email&&this.setValue(e.email.body)},commit:function(e){e.email||(e.email={}),e.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:d.target,title:d.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:l.target,"default":"notSet",style:"width : 100%;",items:[[l.notSet,"notSet"],[d.targetFrame,"frame"],[d.targetPopup,"popup"],[l.targetNew,"_blank"],[l.targetTop,"_top"],[l.targetSelf,"_self"],[l.targetParent,"_parent"]],onChange:i,setup:function(e){e.target&&this.setValue(e.target.type||"notSet"),i.call(this)},commit:function(e){e.target||(e.target={}),e.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:d.targetFrameName,"default":"",setup:function(e){e.target&&this.setValue(e.target.name)},commit:function(e){e.target||(e.target={}),e.target.name=this.getValue().replace(/([^\x00-\x7F]|\s)/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:d.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:d.popupResizable,setup:o,commit:r},{type:"checkbox",id:"status",label:d.popupStatusBar,setup:o,commit:r}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:d.popupLocationBar,setup:o,commit:r},{type:"checkbox",id:"toolbar",label:d.popupToolbar,setup:o,commit:r}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:d.popupMenuBar,setup:o,commit:r},{type:"checkbox",id:"fullscreen",label:d.popupFullScreen,setup:o,commit:r}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:d.popupScrollBars,setup:o,commit:r},{type:"checkbox",id:"dependent",label:d.popupDependent,setup:o,commit:r}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:l.width,id:"width",setup:o,commit:r},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:d.popupLeft,id:"left",setup:o,commit:r}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:l.height,id:"height",setup:o,commit:r},{type:"text",labelLayout:"horizontal",label:d.popupTop,widths:["50%","50%"],id:"top",setup:o,commit:r}]}]}]}]},{id:"upload",label:d.upload,title:d.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:l.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:l.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:d.advanced,title:d.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:d.id,setup:a,commit:s},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:d.langDir,"default":"",style:"width:110px",items:[[l.notSet,""],[d.langDirLTR,"ltr"],[d.langDirRTL,"rtl"]],setup:a,commit:s},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:d.acccessKey,maxLength:1,setup:a,commit:s}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:d.name,id:"advName",requiredContent:"a[name]",setup:a,commit:s},{type:"text",label:d.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:a,commit:s},{type:"text",label:d.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:a,commit:s}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:d.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:a,commit:s},{type:"text",label:d.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:a,commit:s}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:d.cssClasses,requiredContent:"a(cke-xyz)","default":"",id:"advCSSClasses",setup:a,commit:s},{type:"text",label:d.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:a,commit:s}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:d.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:a,commit:s},{type:"text",label:d.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),setup:a,commit:s}]}]}]}],onShow:function(){var e=this.getParentEditor(),t=e.getSelection(),i=null;(i=n.getSelectedLink(e))&&i.hasAttribute("href")?t.getSelectedElement()||t.selectElement(i):i=null,e=n.parseLinkAttributes(e,i),this._.selectedElement=i,this.setupContent(e)},onOk:function(){var t={};this.commitContent(t);var i=e.getSelection(),o=n.getLinkAttributes(e,t);if(this._.selectedElement){var a=this._.selectedElement,r=a.data("cke-saved-href"),s=a.getHtml();a.setAttributes(o.set),a.removeAttributes(o.removed),(r==s||"email"==t.type&&-1!=s.indexOf("@"))&&(a.setHtml("email"==t.type?t.email.address:o.set["data-cke-saved-href"]),i.selectElement(a)),delete this._.selectedElement}else i=i.getRanges()[0],i.collapsed&&(t=new CKEDITOR.dom.text("email"==t.type?t.email.address:o.set["data-cke-saved-href"],e.document),i.insertNode(t),i.selectNodeContents(t)),o=new CKEDITOR.style({element:"a",attributes:o.set}),o.type=CKEDITOR.STYLE_INLINE,o.applyToRange(i,e),i.select()},onLoad:function(){e.config.linkShowAdvancedTab||this.hidePage("advanced"),e.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var e=this.getContentElement("info","linkType");e&&"url"==e.getValue()&&(e=this.getContentElement("info","url"),e.select())}}})}();