var life;
var playing=0;
var score=9;
let c;
var id;
let step;
var fruitslist=["apple","banana","grap","lemon","strawb","watarm"];
$(function(){

    $("#start").click(()=>{
        if(playing == 1){
            location.reload();
        }
        else{
            startgame();
            playing=1;
            $("#start").html("Reset Game");
            score=0;
            $("#score").show();
            $("#res").html(score);
            $("#hearts").show();
            life=3;
           addhearts();
           addfruits();
        }
    });

//function section

function addhearts(){
    $("#hearts").empty();

   for(var i=0;i<life;i++){
    $("#hearts").append('<i class="fa-solid fa-heart fa-lg" style="color: #ff0000; margin: 0px 4px;"></i>');
   }
}


function addfruits(){
    $("#fruitsc").show();
    chooseFruit();
    $("#fruitsc").css({'left':Math.round(430*Math.random()),'top':-50});

    step=1+Math.round(5*Math.random());

    id =setInterval(() => {
        $("#fruitsc").css('top',$("#fruitsc").position().top+step);

        if($('#fruitsc').position().top > $('#ground').height()){
            if(life>1){
                $("#fruitsc").show();
                chooseFruit();
                $("#fruitsc").css({'left':Math.round(430*Math.random()),'top':-50});

                step=1+Math.round(5*Math.random());
                life--;
                if(life>3){
                    life=3;
                }
                addhearts();
            }
            else{
                //gameover
                playing=0;
                $("#hearts").empty();
                $("#start").html("Start Game");
                $("#fscr").html(score);
                $("#gameover").show();
                stopgame();
            }
        }
    },10);
}

function chooseFruit(){
    c=Math.round(5*Math.random());
    $("#fruitsc").attr('src','./img/'+ fruitslist[c]+'.png');
}

//generaet the random falling random steps
//
function startgame(){
    $("#umute").remove();
    $("#mute").append('<i class="fa-solid fa-volume-high" id="umute" style="color: #0084ff;"></i>');
    $("#gameover").hide();
    $("#startg")[0].play();
}
function stopgame(){
    clearInterval(id) ;
    $("#startg")[0].pause();
    $("#gameo")[0].play();
    $("#fruitsc").hide();
    $("#hearts").hide();
    $("#score").hide();
}



//Events
     $("#fruitsc").mouseover(function(){
       
             score++;
               // life++;
            $("#res").html(score);
        //document.getElementById("slice").play();
            $("#slice")[0].play();//jqurey returns array in which the first elementis audio
            clearInterval(id);
           // $("#fruitsc").hide("explode",100);
            
           
            addfruits();
    });
    var mu=0;
    $("#mute").click(()=>{
        $("#umute").remove();
        if(mu==0){
            mu=1;
            $("#startg")[0].pause();
            $("#mute").append('<i class="fa-solid fa-volume-xmark" id="umute" style="color: #0084ff; padding-top: 3px;"></i>'); 
        }
        else{
            mu=0;
            if(playing==1){
                $("#startg")[0].play();
            }
            $("#startg")[0].play();
            $("#mute").append('<i class="fa-solid fa-volume-high" id="umute" style="color: #0084ff;"></i>');
        }
    });
});