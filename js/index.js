
$(document).ready(function(){

    $(".menu__handle").mouseover(function(){
        $(".first").addClass("OneHover");
        $(".third").addClass("ThreeHover");
    });

    $(".menu__handle").mouseout(function(){
        $(".first").removeClass("OneHover");
        $(".third").removeClass("ThreeHover");
    });

    var b = true;
    $(".menu__handle").click(function(){
        if(b){b=false;}
        else{b=true;}

        if(b){
            $(".second").addClass("TwoClick");
            $(".first").addClass("OneClick");
            $(".third").addClass("ThreeClick");
        }else{
            $(".second").removeClass("TwoClick");
            $(".first").removeClass("OneClick");
            $(".third").removeClass("ThreeClick");
        }
    });
});




