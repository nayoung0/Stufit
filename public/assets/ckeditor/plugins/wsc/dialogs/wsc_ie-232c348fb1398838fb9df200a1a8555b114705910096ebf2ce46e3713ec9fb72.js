CKEDITOR.dialog.add("checkspell",function(e){function t(e,t){var o=0;return function(){"function"==typeof window.doSpell?("undefined"!=typeof i&&window.clearInterval(i),n(e)):180==o++&&window._cancelOnError(t)}}function n(t){var n=new window._SP_FCK_LangCompare,i=CKEDITOR.getUrl(e.plugins.wsc.path+"dialogs/"),o=i+"tmpFrameset.html";window.gFCKPluginName="wsc",n.setDefaulLangCode(e.config.defaultLanguage),window.doSpell({ctrl:r,lang:e.config.wsc_lang||n.getSPLangCode(e.langCode),intLang:e.config.wsc_uiLang||n.getSPLangCode(e.langCode),winType:a,onCancel:function(){t.hide()},onFinish:function(n){e.focus(),t.getParentEditor().setData(n.value),t.hide()},staticFrame:o,framesetPath:o,iframePath:i+"ciframe.html",schemaURI:i+"wsc.css",userDictionaryName:e.config.wsc_userDictionaryName,customDictionaryName:e.config.wsc_customDictionaryIds&&e.config.wsc_customDictionaryIds.split(","),domainName:e.config.wsc_domainName}),CKEDITOR.document.getById(s).setStyle("display","none"),CKEDITOR.document.getById(a).setStyle("display","block")}var i,o=CKEDITOR.tools.getNextNumber(),a="cke_frame_"+o,r="cke_data_"+o,s="cke_error_"+o,o=document.location.protocol||"http:",l=e.lang.wsc.notAvailable,d='<textarea style="display: none" id="'+r+'" rows="10" cols="40"> </textarea><div id="'+s+'" style="display:none;color:red;font-size:16px;font-weight:bold;padding-top:160px;text-align:center;z-index:11;"></div><iframe src="" style="width:100%;background-color:#f1f1e3;" frameborder="0" name="'+a+'" id="'+a+'" allowtransparency="1"></iframe>',c=e.config.wsc_customLoaderScript||o+"//loader.webspellchecker.net/sproxy_fck/sproxy.php?plugin=fck2&customerid="+e.config.wsc_customerId+"&cmd=script&doc=wsc&schema=22";return e.config.wsc_customLoaderScript&&(l+='<p style="color:#000;font-size:11px;font-weight: normal;text-align:center;padding-top:10px">'+e.lang.wsc.errorLoading.replace(/%s/g,e.config.wsc_customLoaderScript)+"</p>"),window._cancelOnError=function(t){if("undefined"==typeof window.WSC_Error){CKEDITOR.document.getById(a).setStyle("display","none");var n=CKEDITOR.document.getById(s);n.setStyle("display","block"),n.setHtml(t||e.lang.wsc.notAvailable)}},{title:e.config.wsc_dialogTitle||e.lang.wsc.title,minWidth:485,minHeight:380,buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var n=this.getContentElement("general","content").getElement();n.setHtml(d),n.getChild(2).setStyle("height",this._.contentSize.height+"px"),"function"!=typeof window.doSpell&&CKEDITOR.document.getHead().append(CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",src:c}})),n=e.getData(),CKEDITOR.document.getById(r).setValue(n),i=window.setInterval(t(this,l),250)},onHide:function(){window.ooo=void 0,window.int_framsetLoaded=void 0,window.framesetLoaded=void 0,window.is_window_opened=!1},contents:[{id:"general",label:e.config.wsc_dialogTitle||e.lang.wsc.title,padding:0,elements:[{type:"html",id:"content",html:""}]}]}}),CKEDITOR.dialog.on("resize",function(e){e=e.data;var t=e.dialog;"checkspell"==t._.name&&((t=(t=t.getContentElement("general","content").getElement())&&t.getChild(2))&&t.setSize("height",e.height),t&&t.setSize("width",e.width))});