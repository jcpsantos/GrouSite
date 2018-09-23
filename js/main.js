
$.openData = function (url, type){
    if (type == 'desktop') {
        console.log(type);
        $('.box-conteudoGrou').attr('style', 'display: block');
        window.open(url, 'theFrame')
    } else {
        console.log(type, url);
        $(url).on('shown.bs.modal', function () {
            $('#myInput').focus()
        })
    }
    
}

function openNav() {
    document.getElementById("mySidenav").style.left = "0";
    document.getElementById("main").style.marginLeft = "10vh";
}

function closeNav() {
document.getElementById("mySidenav").style.left = "-500px";
document.getElementById("main").style.marginLeft = "0";
}



