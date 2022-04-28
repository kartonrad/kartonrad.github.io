function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function render_component_articleHierarcyView(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (String, isSubpath, url) {
      ;pug_debug_line = 6;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["baseFolder"] = pug_interp = function(folder, fidx, key, excludeIndex){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 7;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
var idx = 1;
;pug_debug_line = 8;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
// iterate folder.articles 
;(function(){
  var $$obj = folder.articles ;
  if ('number' == typeof $$obj.length) {
      for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
        var article = $$obj[key];
;pug_debug_line = 9;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
if (key!== "index" || !excludeIndex) {
;pug_debug_line = 10;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
var shouldOpen = article.url === url ? "true" : "nochild"
;pug_debug_line = 11;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("open", shouldOpen, true, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["article"](article, idx, fidx, key);
pug_html = pug_html + "\u003C\u002Fli\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
idx++;
}
      }
  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;
      var article = $$obj[key];
;pug_debug_line = 9;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
if (key!== "index" || !excludeIndex) {
;pug_debug_line = 10;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
var shouldOpen = article.url === url ? "true" : "nochild"
;pug_debug_line = 11;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("open", shouldOpen, true, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["article"](article, idx, fidx, key);
pug_html = pug_html + "\u003C\u002Fli\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
idx++;
}
    }
  }
}).call(this);

;pug_debug_line = 14;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
// iterate folder.folders 
;(function(){
  var $$obj = folder.folders ;
  if ('number' == typeof $$obj.length) {
      for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
        var f = $$obj[key];
;pug_debug_line = 15;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
//console.log(f);
;pug_debug_line = 16;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
var bbbb = fidx.concat(idx);
;pug_debug_line = 17;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["folder"](f, bbbb, key);
;pug_debug_line = 18;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
idx++;
      }
  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;
      var f = $$obj[key];
;pug_debug_line = 15;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
//console.log(f);
;pug_debug_line = 16;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
var bbbb = fidx.concat(idx);
;pug_debug_line = 17;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["folder"](f, bbbb, key);
;pug_debug_line = 18;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
idx++;
    }
  }
}).call(this);

};
;pug_debug_line = 20;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["innerfolder"] = pug_interp = function(folder, fidx, key){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 21;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
if (!folder.articles.index) {
;pug_debug_line = 22;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
// iterate fidx
;(function(){
  var $$obj = fidx;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var i = $$obj[pug_index2];
;pug_debug_line = 23;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp));
;pug_debug_line = 23;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + ".";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var i = $$obj[pug_index2];
;pug_debug_line = 23;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp));
;pug_debug_line = 23;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + ".";
    }
  }
}).call(this);

;pug_debug_line = 24;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + " ";
;pug_debug_line = 24;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = key) ? "" : pug_interp));
}
else {
;pug_debug_line = 26;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["article"](folder.articles.index, fidx[fidx.length-1], fidx.slice(0, -1), key);
}
};
;pug_debug_line = 28;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["folder"] = pug_interp = function(folder, fidx, key){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 29;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
var shouldOpen = String(isSubpath(url, folder.url))
;pug_debug_line = 30;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("open", shouldOpen, true, false)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
if (shouldOpen === "true" && !(folder.url+"index" === url)) {
;pug_debug_line = 32;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 33;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["innerfolder"](folder, fidx, key);
pug_html = pug_html + "\u003C\u002Fb\u003E";
}
else {
;pug_debug_line = 35;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["innerfolder"](folder, fidx, key);
}
;pug_debug_line = 37;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 38;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["baseFolder"](folder, fidx, key, true);
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
};
;pug_debug_line = 41;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["innerarticle"] = pug_interp = function(article, idx, fidx, key){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 42;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
// iterate fidx
;(function(){
  var $$obj = fidx;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var i = $$obj[pug_index3];
;pug_debug_line = 43;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp));
;pug_debug_line = 43;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + ".";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var i = $$obj[pug_index3];
;pug_debug_line = 43;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp));
;pug_debug_line = 43;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + ".";
    }
  }
}).call(this);

;pug_debug_line = 44;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp));
;pug_debug_line = 44;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + ". ";
;pug_debug_line = 45;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
var aurl = article.url;
;pug_debug_line = 46;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
if(aurl.endsWith("index")) aurl = aurl.substr(0, aurl.length-5);
;pug_debug_line = 47;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", aurl+(article.template === "listsidebar" ? "?sidebarOpen=true" : ""), true, false)) + "\u003E";
;pug_debug_line = 47;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.title || key) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
};
;pug_debug_line = 49;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["articleoutline"] = pug_interp = function(sections, root){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 50;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
// iterate sections
;(function(){
  var $$obj = sections;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var section = $$obj[idx];
;pug_debug_line = 51;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cli open=\"nochild\"\u003E";
;pug_debug_line = 52;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
if (idx !== 0 || !root) {
;pug_debug_line = 53;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", section.anchor, true, false)) + "\u003E";
;pug_debug_line = 53;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + " ";
;pug_debug_line = 53;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
;pug_debug_line = 54;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 55;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["articleoutline"](section.sub, false);
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var section = $$obj[idx];
;pug_debug_line = 51;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cli open=\"nochild\"\u003E";
;pug_debug_line = 52;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
if (idx !== 0 || !root) {
;pug_debug_line = 53;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", section.anchor, true, false)) + "\u003E";
;pug_debug_line = 53;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + " ";
;pug_debug_line = 53;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
;pug_debug_line = 54;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 55;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["articleoutline"](section.sub, false);
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

};
;pug_debug_line = 57;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["article"] = pug_interp = function(article, idx, fidx, key){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 59;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
if (article.url === url) {
;pug_debug_line = 60;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cb id=\"currentArticle\"\u003E";
;pug_debug_line = 61;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["innerarticle"](article, idx, fidx, key);
pug_html = pug_html + "\u003C\u002Fb\u003E";
;pug_debug_line = 62;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_html = pug_html + "\u003Cul class=\"outline\"\u003E";
;pug_debug_line = 63;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["articleoutline"](article.sections, true);
pug_html = pug_html + "\u003C\u002Ful\u003E";
}
else {
;pug_debug_line = 65;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FarticleHierarcyView.pug";
pug_mixins["innerarticle"](article, idx, fidx, key);
}
};
    }.call(this, "String" in locals_for_with ?
        locals_for_with.String :
        typeof String !== 'undefined' ? String : undefined, "isSubpath" in locals_for_with ?
        locals_for_with.isSubpath :
        typeof isSubpath !== 'undefined' ? isSubpath : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}