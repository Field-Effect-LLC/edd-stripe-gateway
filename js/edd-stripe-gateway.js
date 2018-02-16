jQuery(document).ready(function ($) {
    jQuery("#edd_purchase_form").submit(function(event){ 
        event.preventDefault();
        return false;
    });
    //Credit: https://stackoverflow.com/a/1977126/864414
    $(document).on("keypress", function(event) {
        if (event.keyCode == 13)
        {
            event.preventDefault();
            jQuery("#edd-purchase-button").click();
            return false;
        }
    });
});