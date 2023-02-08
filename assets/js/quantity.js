$(document).ready(function(){
    var quantitiy=0;
    $('.quantity-right-plus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($(this).siblings('.text-center').val());
        // If is not undefined
        $(this).siblings('.text-center').val(quantity + 1);
        // Increment
    });

    $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($(this).siblings('.text-center').val());
        // If is not undefined
        // Increment
        if(quantity>1){
            $(this).siblings('.text-center').val(quantity - 1);
        }
    });
});