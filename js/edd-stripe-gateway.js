jQuery(document).ready(function ($) {
    
    var paymentModeSelector = "input[name='payment-mode']";
    
    var checkMethodIsStripe = function() {
        return jQuery(paymentModeSelector + ":checked").val() === 'stripe_checkout';
    };
    
    var methodIsStripe = checkMethodIsStripe();
    
    jQuery(paymentModeSelector).on("change", function()
    {
        methodIsStripe = checkMethodIsStripe();
    });
    
    jQuery("#edd_purchase_form").submit(function(event){ 
        if (methodIsStripe)
        {
            event.preventDefault();
            return false;
        }
    });
    
    //Credit: https://stackoverflow.com/a/1977126/864414
    $(document).on("keypress", function(event) {
        if (methodIsStripe)
        {
            if (event.keyCode == 13)
            {
                event.preventDefault();
                jQuery("#edd-purchase-button").click();
                return false;
            }
        }
    });
});