window.addEventListener("load", () => {
    //collapseList
    initCollapseList(".collapseList");

    // SIDEBAR
    //initSidebar();

    document.querySelectorAll(".articleList .outline a").forEach((el) => {
        console.log(el);
        el.addEventListener("click", (ev) => {
            var goto = el.getAttribute("href").slice(1)
            document.getElementById(goto).scrollIntoView({behavior: "smooth"});
            closeSidebar();

            console.log(ev);
            ev.stopPropagation();
            ev.preventDefault();
            return false;
        });
    })
});

// MODULES (copy paste because fuck webpack)
//M: COLLAPSE LIST
/**
 * This function takes dom Measurements!
 * Make sure content is visible and &lt;li&gt; tags define the "open" property as "true", "false" or "nochild".
 * Use with collapseList.sass.
 * @param {*} selector root selector for collapselist
 */
function initCollapseList(selector = ".collapseList") {
    document.querySelectorAll(selector+" ul").forEach((node) => {
        node.style.setProperty("--height", node.scrollHeight+"px")
    });
    document.querySelectorAll(selector+" li").forEach((node) => {
        node.classList.add("animOn");
    });

    document.querySelectorAll(selector+" li").forEach((node) => {
        node.addEventListener("click", (evt) => {
            var open = evt.target.getAttribute("open");

            if(open!=="nochild")
                setCollapse(evt.target, open==="true");
            evt.stopPropagation();
            return false;
        })
    });
}

function setCollapse(target, open) {
    if(!open){
        target.parentElement.childNodes.forEach((node) => {
            if(node.tagName && node.tagName.toLowerCase() === "li") {
                var open = node.getAttribute("open");
                if(open!=="nochild") node.setAttribute("open", "false");
            }
        });
    }

    target.setAttribute("open", !open)
}

// SIDEBAR
function initSidebar() {
    var url = new URL(window.location);
    const params = url.searchParams;
    var sidebarOpen = params.get("sidebarOpen")==="true";
    
    if (!sidebarOpen)
        closeSidebar();
    else
        openSidebar();
    
    // and remove the sidebarOpen param, so the url is clean for sharing and display in the browsers bar
    url.searchParams.delete("sidebarOpen")
    var pString = url.searchParams.toString();
    console.log(url.origin+url.pathname+(params?"?"+params:"")+url.hash);
    history.replaceState(null, "If this shows up in your browser history, contact support@kartonrad.me", 
        url.origin+url.pathname+(pString?"?"+pString:"")+url.hash
    );
    

    document.getElementById("mobileSidebarButton").addEventListener("click", (evt) => {
        console.log("eeeee")
        if(sidebarOpen) 
            closeSidebar();
        else 
            openSidebar();

        sidebarOpen = !sidebarOpen;
    }, false);
}

function openSidebar() {
    document.querySelectorAll(".sidebar").forEach((node) => {
        node.classList.add("open");
    });
    var b = document.getElementById("mobileSidebarButton");
    b.setAttribute("open", "true");
}

function closeSidebar() {
    document.querySelectorAll(".sidebar").forEach((node) => {
        node.classList.remove("open");
    });
    var b = document.getElementById("mobileSidebarButton");
    b.setAttribute("open", "false");
}