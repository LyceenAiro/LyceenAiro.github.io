function mainStyles() {
    //主要样式
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.background = "radial-gradient(circle, #373a45 0%, #ccd2dd 100%), radial-gradient(circle, #ccd2dd 0%, #373a45 100%)";
    document.body.style.backgroundSize = "1000% 1000%";
    document.body.style.backgroundPosition = "50% 50%";
    document.body.style.animation = "ripple 5s linear infinite";

    var containers = document.getElementsByClassName("container");
    for (var i = 0; i < containers.length; i++) {
        containers[i].style.backgroundColor = "rgba(230, 230, 250, 0.2)";
        containers[i].style.borderRadius = "10px";
        containers[i].style.padding = "20px";
        containers[i].style.margin = "20px";
        containers[i].style.color = "white";
    }

    var images = document.querySelectorAll(".container img");
    for (var i = 0; i < images.length; i++) {
        images[i].style.maxWidth = "100%";
        images[i].style.maxHeight = "100%";
        images[i].style.objectFit = "contain";
    }

    var headings = document.querySelectorAll("h1, h2, p, div");
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.textAlign = "center";
        
    }

    var links = document.querySelectorAll("a, a:hover");
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "rgb(255, 190, 239)";
        links[i].style.textDecoration = "none";
    }

    var linkContainers = document.querySelectorAll('.link-container');
    for (var i = 0; i < linkContainers.length; i++) {
        linkContainers[i].style.display = 'inline-block';
        linkContainers[i].style.justifyContent = 'center';
        linkContainers[i].style.textAlign = 'left';
        var links = linkContainers[i].querySelectorAll('.link');
        for (var j = 0; j < links.length; j++) {
            links[j].style.display = 'flex';
            links[j].style.alignItems = 'center';
            links[j].style.textAlign = 'center';
            var linkImages = links[j].querySelectorAll('img');
            for (var k = 0; k < linkImages.length; k++) {
                linkImages[k].style.width = 'auto';
                linkImages[k].style.height = '1.5em';
                linkImages[k].style.marginRight = '1em';
            }
        }
    }

    // 应用于小屏幕设备的样式
    if (window.matchMedia("(max-width: 1100px)").matches) {
        var containers = document.getElementsByClassName("container");
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.padding = "10px";
        }

        var images = document.querySelectorAll(".container img");
        for (var i = 0; i < images.length; i++) {
            images[i].style.maxWidth = "100%";
            images[i].style.maxHeight = "100%";
            images[i].style.width = "80%";
            images[i].style.objectFit = "contain";
        }

        var headings = document.querySelectorAll("h1");
        for (var i = 0; i < headings.length; i++) {
            headings[i].style.fontSize = "72px";
        }

        var headings = document.querySelectorAll("h2");
        for (var i = 0; i < headings.length; i++) {
            headings[i].style.fontSize = "54px";
        }

        var paragraphs = document.querySelectorAll("p");
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.fontSize = "30px";
        }

        var paragraphs = document.querySelectorAll("a, a:hover");
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.fontSize = "20px";
        }

        var linkContainers = document.querySelectorAll('.link-container');
        for (var i = 0; i < linkContainers.length; i++) {
            linkContainers[i].style.display = 'inline-block';
            linkContainers[i].style.justifyContent = 'center';
            linkContainers[i].style.textAlign = 'left';
            var links = linkContainers[i].querySelectorAll('.link');
            for (var j = 0; j < links.length; j++) {
                links[j].style.display = 'flex';
                links[j].style.alignItems = 'center';
                links[j].style.textAlign = 'center';
                var linkImages = links[j].querySelectorAll('img');
                for (var k = 0; k < linkImages.length; k++) {
                    linkImages[k].style.width = 'auto';
                    linkImages[k].style.height = '2em';
                    linkImages[k].style.marginRight = '1.5em';
                }
            }
        }
    }

    
}


function applySmallTextStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
      .small-text {
        font-size: 14px;
        color: rgb(200, 200, 240);
      }
    `;
    document.head.appendChild(style);
}