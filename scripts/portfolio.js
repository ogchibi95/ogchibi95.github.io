





function import_script(let URI){

    let script = document.createElement("script");
    script.src = URI;
    script.async = true;
    document.head.appendChild(script);
  
}

function import_css(let URI){
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = URI;
    document.head.appendChild(style);
}


