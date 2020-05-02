$(document).ready(function() {
    $('#search').keyup(function() {


        var text = $(this).val();


        $('.v-list-item').hide();


        $('.v-list-item:contains("' + text + '")').closest('.v-list-item').show();

    });
});

$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function(elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
