$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-brand');
        if (value == 'All'){
            $('.product').show('1000');
        }
        else{
            $('.product').not('.' + value).hide('1000');
            $('.product').filter('.'+value).show('1000');
        }
    });
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
});