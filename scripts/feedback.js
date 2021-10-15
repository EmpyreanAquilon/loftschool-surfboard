// $(".control-feedback__item").click(e => {
//     // e.preventDefault();
//     // console.log("работает")
//     console.log($(this).is(".control-feedback__item--active"))
//     // if ($(this).closest("control-feedback__item").is("control-feedback__item--active")) {
//     //     console.log("работает")
//     // }
// })

$(document).on("click", ".control-feedback__item", function() {
    if (!$(this).is(".control-feedback__item--active")) {
        // console.log("нет класса актив");
        $(".control-feedback__item").removeClass("control-feedback__item--active");
        $(".feedback-person").removeClass("feedback-person--active");
        $(this).addClass("control-feedback__item--active");
        let numberIndex = $(this).index();
        $(".feedback__list").find(".feedback-person:eq(" + numberIndex + ")").addClass("feedback-person--active");
        $(".feedback-person").css("margin-left", `0%`)
        $(".feedback-person--active").css("margin-left", `${numberIndex * -100}%`)
    }
});

