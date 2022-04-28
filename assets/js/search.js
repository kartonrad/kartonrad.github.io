const currentScript = document.currentScript;
const searchExplanation = (
`<img src="https://cdn.discordapp.com/emojis/732225582854569985.png?v=1" style="margin: auto;display: block;"> 
<p style="font-size: 1em;"><b>Looks like there are no results...</b></p>
<p style="white-space: pre-wrap;font-size: 1em;text-align: left;">
<b>But there's hope!</b>
The search is very sensitive to spelling errors.
<b>Use ~3</b> behind a word if you're unsure how it's spelled
(the higher the number, the more wrong charachters are allowed) 
( "foo~1" matches "boo", "foo~2" matches "boot") 

<b>Use *</b> to match variations of a word.
( "flo*" matches "floss" and "float" )

<b>Use -</b> before a word to exclude it from the search,
<b>Use +</b> before a word to require it to be present

<b>Use "title:<word>"</b> to only search for a word within document titles
Advanced shit: Search "+title:OMINOUS +title:DOCUMENT" to find all untitled articles
(cus "OMINOUS DOCUMENT" is the default title lol)

<b>Use ^4</b> after a word to raise its priority in the search 
(the higher the number... you get it)

<b><a href="https://lunrjs.com/guides/searching.html#wildcards">More info...</a></b> (Will take you to the documentation of the tool i use)</p>
`+"")
console.log(searchExplanation);


window.addEventListener("load", async () => {
    const articleCache = await (await fetch("/articleCache.json")).json();
    

    console.log(articleCache);
    console.log( getSearchIndex(articleCache, ["docs"], 2) );

    function prepareSearch() {
        return new Promise(( resolve ) => {
            var newScript = document.createElement("script");
            newScript.onload = resolve;
            currentScript.parentNode.insertBefore(newScript, currentScript);
            newScript.src = "/assets/js/lunr.js";
        });
    }

    document.addEventListener("keydown", (ev) => {
        if(ev.ctrlKey && ev.key === "k") {
            console.log("eee");
            var ip = document.querySelector(".searchBar input"); ip.focus();
            ip.setAttribute("placeholder", "Search...")
            ev.stopPropagation();
            ev.preventDefault();
        }
        console.log("a");
    })

    document.querySelectorAll(".searchLink").forEach((searchLink) => {
        searchLink.addEventListener("click", () => {
            // integrate with sidebar/colapseList script
            if (typeof openSidebar === "function" ) openSidebar();

            var ip = document.querySelector(".searchBar input"); 
            ip.value = searchLink.getAttribute("data-search")
            setTimeout(() => {
                ip.focus();
            }, 0);
        })
    });

    document.querySelectorAll(".searchBar").forEach((searchbar) => {
        var scopePath = searchbar.getAttribute("scope");
        var scope = scopePath ? scopePath.split("/").filter( (p) => !!p ) : [];
        var depth = Number.parseInt( searchbar.getAttribute("depth") );
        const resultsDrawer = searchbar.querySelector(".results");

        var input = searchbar.querySelector("input");

        var solr;
        var searchIndex;

        var prevSearch;
        function search(string) {
            // prevent unessasary computation
            if( string === prevSearch ) return;
            prevSearch = string;

            var trickQuery = string
            if( /\S$/.test(string) ) {
                trickQuery += "*";
                var terms = string.split(/\s/g);
                trickQuery += " "+terms[terms.length-1];
            }
            console.log(trickQuery);

            var ress = solr.search(trickQuery);
            var resss = [];
            var constructHTML = "";
            ress.filter((res) => res.score>0).forEach((res) => {
                var entry = searchIndex[Number.parseInt(res.ref)];
                resss.push({ entry: entry, ssearch: res});

                var sig = 0; // significance
                if(res.score>0.5) sig++;
                if(res.score>1) sig++;

                constructHTML += `<li><a href="${entry.url}">${entry.title}</a> <span sig="${sig}">${res.score}</span>
                <br/>${entry.description.replace("\n", "<br/>")}</li><hr/>`;
            });

            if(/\S/g.test(string))
                resultsDrawer.innerHTML = constructHTML || searchExplanation;
            else
                resultsDrawer.innerHTML = "Don't be shy now! Type something."
            console.log("Searched: ",resss);
        }

        input.addEventListener("focus", async function bbbb () {
           input.setAttribute("placeholder", "Search...")
            if(!solr) {
                await prepareSearch();
                searchIndex = getSearchIndex(articleCache, scope, isNaN(depth) ? undefined : depth);
                solr = lunr(function () {
                    this.ref('id')
                    this.field('title')
                    this.field('author', {boost: 0})
                    this.field('fulltext')

                    searchIndex.forEach(function (s, idx) {
                        this.add({url: s.url, title: s.title, fulltext: s.fulltext, id: idx, author: s.author+""})
                    }, this)
                });
                console.log(`Initialized Searchbar with depth=${depth} and scope=${scope}\n=> Index: `, searchIndex);
                search(String(input.value), false);

                input.removeEventListener("focus", bbbb);
                input.addEventListener("focus", () => {
                    search(String(input.value), false);
                });

                input.addEventListener("change", ( ) => {
                    search(String(input.value), false);
                });

                input.addEventListener("keyup", () => {
                    search(String(input.value), true);
                } )
            }
        });
    });
});

function getSearchIndex(cache, pathArray, depth=Number.MAX_SAFE_INTEGER, curD = 0) {
    var index = [];

    if(curD < depth) {
        if(pathArray.length<1) {
            for (key in cache.articles) {
                //console.log(key);
                index.push( cache.articles[key] );
                index[index.length-1].key = key;
            }
        }
        

        for (key in cache.folders) {
            if(pathArray.length<1 && cache.folders[key].articles.index) {
                //index.push(cache.folders[key].articles.index);
               //index[index.length-1].key = key;
            }

            if( (pathArray.length<1 || pathArray[0] === key)&&key!=="index" ){
                index = index.concat(getSearchIndex(cache.folders[key], pathArray.slice(1), depth, curD+pathArray.length<1? 1 : 0) );
            }
        }
    }
    return index;
}

