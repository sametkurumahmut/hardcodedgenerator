$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});

$(document).ready(function () {
    $('.icon-exchange').click(function() {
        var sidebar = $('#container-sidebar');
        
        if ($(sidebar).hasClass('sidebar-left')) {
            $(sidebar).removeClass('sidebar-left');
            $(sidebar).addClass('sidebar-right');
        } else {
            $(sidebar).removeClass('sidebar-right');
            $(sidebar).addClass('sidebar-left'); 
        }
    });
});
