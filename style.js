/*
STYLESHEET USING JAVASCRIPT(JQUERY) FOR Webbud
Author: Arsalan Rashid arsalanrashidthoker
arsalanrashidthoker@gmail.com
*/
$(function(){
    var data = new Array();
    $("div.banner").find("button").mouseover(function(e){
        e.preventDefault();
        $(this).css("border-color", "white");
    });
    if(window.innerWidth<= 800){
        $("nav").hide();
    }
    $("div.brand-name").find("button").click(function(e){
        e.preventDefault();
        //$("nav").toggleClass("show");
        $("nav").slideToggle();
    });
    if(window.innerWidth>800){
        $("nav").show();
    }
    /*
    $($("nav>a").get(1)).click(function(e){
        e.preventDefault();
        $("div.contact-page").show();
        $("div.index-page").hide();
        $("div.member-form").hide();
        $("div.about-page").hide();
    });
    $($("nav>a").get(2)).click(function(e){
        e.preventDefault();
        $("div.contact-page").hide();
        $("div.index-page").hide();
        $("div.member-form").hide();
        $("div.about-page").show();
    });
    $($("nav>a").get(3)).click(function(e){
        e.preventDefault();
        $("div.contact-page").hide();
        $("div.index-page").hide();
        $("div.member-form").show();
        $("div.about-page").hide();
    });
    */
    $("input.form-control").focus(function(e){
        //$("span.input-group-addon").children().css("color", "white");
        $(this).prev().children().css("color", "var(--banner)");
    });
    $("input.form-control").focusout(function(e){
        $("span.input-group-addon").children().css("color", "white");
        $("span#wrong").children().css("color", "red");
        $("span#correct").children().css("color", "#88d00a");
    });
    $("span#add").click(function(){
        var skill = $("input[name='skill']").val();
        data.push(skill);
        $("div.skills").append("<div class='skill-item'> <span class='cancel'><span class='glyphicon glyphicon-remove'></span> </span>  <p>" + skill + "</p></div>");
        //$("input[name='skill']").val().empty();
        $("input[name='skill']").val() = data;
    });
    $("div.skills").click(function(e){
        e.preventDefault();
        console.log($(e.target).children().length);
        //console.log(data);
        //$(this).parent().parent().parent().children().remove();
        if($(e.target).children().length === 0){
            $(e.target).parent().parent().remove();
    }
    console.log(e);
    e.stopPropagation(); //STOP EVENT PROPAGATION FURTHER
    });
    $("button.reset").click(function(){
        $("div.skills").children().remove();
    });

    var username = $("input[name='username']");
    //$("span#correct, span#wrong").hide();
    username.keyup(function(e){
        //var val = username.val();
        if(e.key >= 'a'){
            $(this).next().next().hide();
            $(this).next().show();
        }
        else{
            $(this).next().hide();
            $(this).next().next().show().css("color", "red");
        }
    });




});
