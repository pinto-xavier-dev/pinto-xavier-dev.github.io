window.onload = function(){
    var demo = document.getElementById("demo");
    var backend = document.getElementById("backend");
    var frontend = document.getElementById("frontend");

    var panelFrontEnds = document.getElementsByClassName("panelFrontEnd");
    var panelBackEnds = document.getElementsByClassName("panelBackEnd");
    var panelDemo = document.getElementsByClassName("panelDemo");
    
    showFrondenditems(frontend,panelFrontEnds,panelBackEnds,panelDemo);   
    demo.addEventListener('click',function(){
        for (var i = 0; i < panelFrontEnds.length; i++) {
            panelFrontEnds[i].style.display = 'none';
        }
        for (var i = 0; i < panelBackEnds.length; i++) {
            panelBackEnds[i].style.display = 'none';
        } 
        panelDemo[0].style.display = 'flex';

        frontend.classList.remove("active");
        backend.classList.remove("active");
        demo.classList.add("active");
    
    });

    frontend.addEventListener('click',function(){
        showFrondenditems(frontend,panelFrontEnds,panelBackEnds,panelDemo);
    });

    backend.addEventListener('click',function(){
        for (var i = 0; i < panelBackEnds.length; i++) {
            panelBackEnds[i].style.display = 'flex';
        }
        for (var i = 0; i < panelFrontEnds.length; i++) {
            panelFrontEnds[i].style.display = 'none';
        }
        panelDemo[0].style.display = 'none';
        frontend.classList.remove("active");
        backend.classList.add("active");
        demo.classList.remove("active");

    });

}; //self starting fn() end 

 function showFrondenditems(frontend,panelFrontEnds,panelBackEnds,panelDemo){
    for (var i = 0; i < panelFrontEnds.length; i++) {
        panelFrontEnds[i].style.display = 'flex';
        }

    for (var i = 0; i < panelBackEnds.length; i++) {
        panelBackEnds[i].style.display = 'none';
    } 
    panelDemo[0].style.display = 'none';
    frontend.classList.add("active");
    backend.classList.remove("active");
    demo.classList.remove("active");

}