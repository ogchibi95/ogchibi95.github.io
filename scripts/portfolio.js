




function import_script(let URI){

    const STAG = document.createElement('script');
    STAG.src = URI;
    STAG.async = false;
    document.head.appendChild(STAG);
}