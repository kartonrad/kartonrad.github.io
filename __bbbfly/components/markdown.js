function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function render_component_markdown(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (converted, title) {
      ;pug_debug_line = 1;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + " ";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Cmeta charset=\"UTF-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "src\\components\\eyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-32.png\" sizes=\"32x32\" type=\"image\u002Fpng\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\\components\\eyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-128.png\" sizes=\"128x128\" type=\"image\u002Fpng\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\eyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-152.png\" sizes=\"152x152\" type=\"image\u002Fpng\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\eyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-167.png\" sizes=\"167x167\" type=\"image\u002Fpng\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\eyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-180.png\" sizes=\"180x180\" type=\"image\u002Fpng\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\\components\\eyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-192.png\" sizes=\"192x192\" type=\"image\u002Fpng\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\\components\\eyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-196.png\" sizes=\"196x196\" type=\"image\u002Fpng\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\\components\\layout.pug";
;pug_debug_line = 10;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title || "DRKSLV") ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002F__bbbfly\u002Fstyle\u002Findex.css\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + " ";
;pug_debug_line = 15;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + " ";
;pug_debug_line = 16;pug_debug_filename = "src\\components\\layout.pug";
;pug_debug_line = 17;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Ca class=\"eye\" href=\"\u002F\"\u003E\u003C?xml version=\"1.0\" encoding=\"UTF-8\"?\u003E\n\u003C!-- Created using Krita: http:\u002F\u002Fkrita.org --\u003E\n\u003Csvg width=\"209.33pt\" height=\"105.84pt\" version=\"1.1\" viewBox=\"0 0 209.33 105.84\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:cc=\"http:\u002F\u002Fcreativecommons.org\u002Fns#\" xmlns:dc=\"http:\u002F\u002Fpurl.org\u002Fdc\u002Felements\u002F1.1\u002F\" xmlns:rdf=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002F02\u002F22-rdf-syntax-ns#\"\u003E\n    \u003Cmetadata\u003E\n        \u003Crdf:RDF\u003E\n            \u003Ccc:Work rdf:about=\"\"\u003E\n                \u003Cdc:format\u003Eimage\u002Fsvg+xml\u003C\u002Fdc:format\u003E\n                \u003Cdc:type rdf:resource=\"http:\u002F\u002Fpurl.org\u002Fdc\u002Fdcmitype\u002FStillImage\"\u002F\u003E\n                \u003Cdc:title\u002F\u003E\n            \u003C\u002Fcc:Work\u003E\n        \u003C\u002Frdf:RDF\u003E\n    \u003C\u002Fmetadata\u003E\n    \u003Cdefs\u003E\n        \u003CradialGradient id=\"eyeOfJudgementCursed\" cx=\"50%\" cy=\"50%\" r=\"50%\" fx=\"50%\" fy=\"50%\"\u003E\n            \u003Cstop offset=\"0%\" style=\"stop-color:var(--inner-color, #00f3ff);\n            stop-opacity:1\" \u002F\u003E\n            \u003Cstop offset=\"100%\" style=\"stop-color:var(--outer-color, #ff00fe);stop-opacity:1\" \u002F\u003E\n        \u003C\u002FradialGradient\u003E\n    \u003C\u002Fdefs\u003E\n\n    \u003Cpath id=\"eyelid\" d=\"m10.384 52.74c64.32 61.2 127.2 61.2 188.64 0-63.36-60.72-126.24-60.72-188.64 0z\" fill=\"none\" stroke=\"var(--base-color, #ff00fe)\" stroke-dashoffset=\"15.84\" stroke-linecap=\"square\" stroke-linejoin=\"round\" stroke-width=\"14.4\"\u002F\u003E\n    \u003Cellipse cx=\"104.7\" cy=\"52.92\" rx=\"37.44\" ry=\"37.44\" fill=\"url(#eyeOfJudgementCursed)\" fill-rule=\"evenodd\" stroke=\"var(--base-color, #ff00fe)\" stroke-linecap=\"square\" stroke-linejoin=\"bevel\" stroke-width=\"0\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C!--#ff00fe color--\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Cspan class=\"gradientText\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "Kartonrad\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\\components\\layout.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\\components\\layout.pug";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002Fmarkdown.pug";
pug_html = pug_html + "\u003Cdiv class=\"document markdownModest\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002Fmarkdown.pug";
pug_html = pug_html + (null == (pug_interp = converted) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "converted" in locals_for_with ?
        locals_for_with.converted :
        typeof converted !== 'undefined' ? converted : undefined, "title" in locals_for_with ?
        locals_for_with.title :
        typeof title !== 'undefined' ? title : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}