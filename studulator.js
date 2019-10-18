let input = {};

function colorizeSD(className){
    input.removeClass('bg-info bg-success');
    input.addClass(className);
}

function writeSD(somenumbers){
    let htmlOfInput = input.html();
    if(htmlOfInput.includes('Studulator')){
        input.html('');
        htmlOfInput = '';
    }
    input.html((htmlOfInput + somenumbers).replace(/\s/g, ''));
}

function backspaceSD(){
    let htmlOfInput = input.html();
    if(htmlOfInput.length){
        input.html(htmlOfInput.substring(0, htmlOfInput.length - 1));
    }
}

function clearSD(){
    $('.input').html('')
}

function readSD(){
    return parseInt($('.input').html().replace(/\s/g, ''));
}

$(function(){
    input = $('.input');
    let studulator = $('#studulator');
    let buttons = $('#studulator').find('.calc-btn');
    buttons.each(function(){
        $(this).on('click', function(){
            writeSD($(this).html());
        });
    });
    $('.del').on('click', function(){
        backspaceSD();
    });
});