
class User {
    constructor(_firstname, _lastname, _image) {
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.image = _image;
    }
}

let loginedUser;

$(".login_button").on("click", function () {
    let f_name = $("#firstname").val();
    let l_name = $("#lastname").val();
    $("#lastname").val("");
    $("#firstname").val("");
    let img_src = $(".selected").attr("src");
    let user = new User(f_name, l_name, img_src);
    loginedUser = user;
})

$(".user_image").on("click", function () {
    // let images = document.querySelectorAll(".user_image");
    // // images.removeAttribute("style");    error
    // for(let i = 0;i< images.length; i++){
    //     images[i].removeAttribute("style");
    // }

    $(".user_image").removeAttr("style").removeClass("selected");
    $(this).css("border", "2px solid #ccc").addClass("selected");
})

$(".send_comment").on("click", function () {
    let comment = $(".comment_message").val();
    $(".comment_message").val("");
    let comment_contain = $(".comment_contain");
    let media = create("div");
    $(comment_contain).append(media);
    $(media).addClass("media");
    let image = create("img");
    $(image).css("width", "64px");
    $(image).addClass("mr-3");
    $(image).attr("src", loginedUser.image);
    $(media).append(image);
    let media_body = create("div");
    $(media).append(media_body);
    $(media_body).addClass("media-body");
    $(media_body).html('<h5 class="mt-0">'+loginedUser.firstname+'  '+loginedUser.lastname+'</h5>'+comment); 
    $(comment_contain).append("<br/>");
})



function create(tagName) {
    return document.createElement(tagName);
}

 