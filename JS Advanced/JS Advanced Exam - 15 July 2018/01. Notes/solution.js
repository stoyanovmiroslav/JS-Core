function addSticker(){
    let $title = $('.title');
    let $text = $('.content');

    if (!$title.val() || !$text.val()){
        return;
    }

    let $a = $('<a>');
    $a.addClass('button');
    $a.text('x');

    $a.on('click', function () {
        $(this).parent().remove();
    });

    let $h2 = $('<h2>');
    $h2.text($title.val());

    let $hr = $('<hr>');

    let $p = $('<p>');
    $p.text($text.val());

    let $li = $('<li>');
    $li.addClass('note-content');
    $li.append($a);
    $li.append($h2);
    $li.append($hr);
    $li.append($p);

    let $ul = $('#sticker-list');

    $ul.append($li);

    $title.val('');
    $text.val('');
}