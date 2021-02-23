$(document).ready(function() {
  $('.btn_comment_length').each(function() {
    var count = $(this).closest('.card-body').find('ul.leave_comments_list li').length;
    $(this).html(count + '則留言');
  })
})

function comment_length_change() {
  $('.btn_comment_length').each(function() {
    var count = $(this).closest('.card-body').find('ul.leave_comments_list li').length;
    $(this).html(count + '則留言');
  })
}

$(".leave_comments").on("keyup", function(e) {
  if (e.which == 13) {
    var task_text = $(this).val();
    if (task_text != "") {

      var list_html = "";

      list_html += '<li>';
      list_html += '<div class="row comment">';
      list_html += `<p class="card-text col-md-11"> <a href="#" class="poster_name">${'用戶名'}</a>${task_text}</p>`;
      list_html += `<button class="comment_like btn col-md-1" type="button" name="button"> <img class="heart" src="images/black_heart.png" alt=""> </button>`
      list_html += '</div>';
      list_html += '</li>';

      $(this).closest('div.card-body').find('ul.leave_comments_list').append(list_html);
      $(this).val("");
      $(this).closest('div.card-body').find('input').attr("type", "hidden");
      $(this).closest('div.card-body').find('img.leave_comments_img').css('display', 'none');
      comment_length_change();
    }
  }
});

$('.btn_like').on("click", function() {
  var count = $(this).closest('.card-body').find('.like_count').attr('value');
  if ($(this).find('.heart').attr("src") == 'images/black_heart.png') {
    $(this).find('.heart').attr("src", "images/red_heart.png");
    count++;
    $(this).closest('.card-body').find('.like_count').attr('value', count);
    $(this).closest('.card-body').find('.like_count').html(count + '個讚');
  } else {
    $(this).find('.heart').attr("src", "images/black_heart.png")
    count--;
    $(this).closest('.card-body').find('.like_count').attr('value', count);
    $(this).closest('.card-body').find('.like_count').html(count + '個讚');

  }
})
$('.btn_comment').on('click', function() {

  if ($(this).closest('div.card-body').find('input').attr('type') == 'hidden') {
    $(this).closest('.card-body').find('ul.leave_comments_list').css('display', 'block');
    $(this).closest('div.card-body').find('input').attr("type", "text");
    $(this).closest('div.card-body').find('img.leave_comments_img').css('display', 'inline');
  } else {
    $(this).closest('div.card-body').find('input').attr("type", "hidden");
    $(this).closest('div.card-body').find('img.leave_comments_img').css('display', 'none');

  }
})
$('.btn_star').on("click", function() {
  if ($(this).find('.star').attr("src") == 'images/black-star.png') {
    $(this).find('.star').attr("src", "images/light-star.png")
  } else {
    $(this).find('.star').attr("src", "images/black-star.png")
  }
})
$('ul').on("click", '.comment_like', function() {
  if ($(this).find('.heart').attr("src") == 'images/black_heart.png') {
    $(this).find('.heart').attr("src", "images/red_heart.png")
  } else {
    $(this).find('.heart').attr("src", "images/black_heart.png")
  }
})
$('.btn_comment_length').on('click', function() {
  if($(this).closest('.card-body').find('ul.leave_comments_list').css('display')=='none'){
    $(this).closest('.card-body').find('ul.leave_comments_list').css('display', 'block');
  }else{
    $(this).closest('.card-body').find('ul.leave_comments_list').css('display', 'none');
  }
})
