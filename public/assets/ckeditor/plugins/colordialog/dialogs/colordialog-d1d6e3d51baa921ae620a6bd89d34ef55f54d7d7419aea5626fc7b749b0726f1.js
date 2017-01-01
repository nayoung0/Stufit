CKEDITOR.dialog.add("colordialog",function(e){function t(){g.getById(O).removeStyle("background-color"),c.getContentElement("picker","selectedColor").setValue(""),i()}function n(e){e=e.data.getTarget();var t;"td"==e.getName()&&(t=e.getChild(0).getHtml())&&(i(),d=e,d.setAttribute("aria-selected",!0),d.addClass("cke_colordialog_selected"),c.getContentElement("picker","selectedColor").setValue(t))}function i(){d&&(d.removeClass("cke_colordialog_selected"),d.removeAttribute("aria-selected"),d=null)}function o(e){e=e.replace(/^#/,"");for(var t=0,n=[];2>=t;t++)n[t]=parseInt(e.substr(2*t,2),16);return 165<=.2126*n[0]+.7152*n[1]+.0722*n[2]}function a(e){!e.name&&(e=new CKEDITOR.event(e));var t,n=!/mouse/.test(e.name),i=e.data.getTarget();"td"==i.getName()&&(t=i.getChild(0).getHtml())&&(r(e),n?u=i:h=i,n&&i.addClass(o(t)?"cke_colordialog_focused_light":"cke_colordialog_focused_dark"),s(t))}function r(e){(e=!/mouse/.test(e.name)&&u)&&(e.removeClass("cke_colordialog_focused_light"),e.removeClass("cke_colordialog_focused_dark")),u||h||s(!1)}function s(e){e?(g.getById(C).setStyle("background-color",e),g.getById(I).setHtml(e)):(g.getById(C).removeStyle("background-color"),g.getById(I).setHtml("&nbsp;"))}function l(t){var i=t.data,o=i.getTarget(),a=i.getKeystroke(),r="rtl"==e.lang.dir;switch(a){case 38:(t=o.getParent().getPrevious())&&(t=t.getChild([o.getIndex()]),t.focus()),i.preventDefault();break;case 40:(t=o.getParent().getNext())&&(t=t.getChild([o.getIndex()]))&&1==t.type&&t.focus(),i.preventDefault();break;case 32:case 13:n(t),i.preventDefault();break;case r?37:39:(t=o.getNext())?1==t.type&&(t.focus(),i.preventDefault(!0)):(t=o.getParent().getNext())&&(t=t.getChild([0]))&&1==t.type&&(t.focus(),i.preventDefault(!0));break;case r?39:37:(t=o.getPrevious())?(t.focus(),i.preventDefault(!0)):(t=o.getParent().getPrevious())&&(t=t.getLast(),t.focus(),i.preventDefault(!0))}}var c,d,u,h,m,f=CKEDITOR.dom.element,g=CKEDITOR.document,E=e.lang.colordialog,p={type:"html",html:"&nbsp;"},T=function(e){return CKEDITOR.tools.getNextId()+"_"+e},C=T("hicolor"),I=T("hicolortext"),O=T("selhicolor");return function(){function e(e,n){for(var o=e;o<e+3;o++){var a=new f(m.$.insertRow(-1));a.setAttribute("role","row");for(var r=n;r<n+3;r++)for(var s=0;6>s;s++)t(a.$,"#"+i[r]+i[s]+i[o])}}function t(e,t){var i=new f(e.insertCell(-1));i.setAttribute("class","ColorCell cke_colordialog_colorcell"),i.setAttribute("tabIndex",-1),i.setAttribute("role","gridcell"),i.on("keydown",l),i.on("click",n),i.on("focus",a),i.on("blur",r),i.setStyle("background-color",t);var o=T("color_table_cell");i.setAttribute("aria-labelledby",o),i.append(CKEDITOR.dom.element.createFromHtml('<span id="'+o+'" class="cke_voice_label">'+t+"</span>",CKEDITOR.document))}m=CKEDITOR.dom.element.createFromHtml('<table tabIndex="-1" class="cke_colordialog_table" aria-label="'+E.options+'" role="grid" style="border-collapse:separate;" cellspacing="0"><caption class="cke_voice_label">'+E.options+'</caption><tbody role="presentation"></tbody></table>'),m.on("mouseover",a),m.on("mouseout",r);var i="00 33 66 99 cc ff".split(" ");e(0,0),e(3,0),e(0,3),e(3,3);var o=new f(m.$.insertRow(-1));o.setAttribute("role","row"),t(o.$,"#000000");for(var s=0;16>s;s++){var c=s.toString(16);t(o.$,"#"+c+c+c+c+c+c)}t(o.$,"#ffffff")}(),CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(CKEDITOR.plugins.get("colordialog").path+"dialogs/colordialog.css")),{title:E.title,minWidth:360,minHeight:220,onLoad:function(){c=this},onHide:function(){t(),u.removeClass("cke_colordialog_focused_light"),u.removeClass("cke_colordialog_focused_dark"),s(!1),u=null},contents:[{id:"picker",label:E.title,accessKey:"I",elements:[{type:"hbox",padding:0,widths:["70%","10%","30%"],children:[{type:"html",html:"<div></div>",onLoad:function(){CKEDITOR.document.getById(this.domId).append(m)},focus:function(){(u||this.getElement().getElementsByTag("td").getItem(0)).focus()}},p,{type:"vbox",padding:0,widths:["70%","5%","25%"],children:[{type:"html",html:"<span>"+E.highlight+'</span><div id="'+C+'" style="border: 1px solid; height: 74px; width: 74px;"></div><div id="'+I+'">&nbsp;</div><span>'+E.selected+'</span><div id="'+O+'" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:"text",label:E.selected,labelStyle:"display:none",id:"selectedColor",style:"width: 76px;margin-top:4px",onChange:function(){try{g.getById(O).setStyle("background-color",this.getValue())}catch(e){t()}}},p,{type:"button",id:"clear",label:E.clear,onClick:t}]}]}]}]}});