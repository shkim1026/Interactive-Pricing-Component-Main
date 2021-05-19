
// VARIABLES START
const pageviews = {
    0: '10K Pageviews',
    1: '50K Pageviews',
    2: '100K Pageviews',
    3: '500K Pageviews',
    4: '1M Pageviews'
};
let cost = {
    0: 8,
    1: 12,
    2: 16, 
    3: 24,
    4: 36
};
let discount = 0.25;
let discountedCost = {
};
const rangeFill = {
    0: 'hsl(224, 65%, 95%)',
    1: 'linear-gradient(to right, hsl(174, 77%, 80%) 25%, hsl(224, 65%, 95%) 25%)',
    2: 'linear-gradient(to right, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%)',
    3: 'linear-gradient(to right, hsl(174, 77%, 80%) 75%, hsl(224, 65%, 95%) 75%)',
    4: 'hsl(174, 77%, 80%)'
};
// VARIABLES END

// FUNCTION START
function checkPrice() {
    let objectLength = Object.keys(cost).length;
    let rangeValue = $('#tier-range').val();
    for (i=0; i<objectLength; i++) {
        if ($('#toggle').is(':checked')) {
            if (rangeValue == i) {  //Discount for YEARLY
                let discountedPrice = cost[i] - (cost[i] * discount);
                let finalDiscountedPrice = discountedPrice.toFixed(2);
                let xPageviews = Object.values(pageviews)[i];
                $('.tier-pageviews').text(xPageviews);  //ex: '100K PAGEVIEWS'
                $('.payment').text('$' + finalDiscountedPrice);  //ex: $12.00
                let rangeFilled = Object.values(rangeFill)[i];
                $('.range').css('background', rangeFilled);  //Range slider - Cyan fill
            }
        } else if (rangeValue == i) {  //NO discount
            let price = Object.values(cost)[i];
            let finalPrice = price.toFixed(2);
            let xPageviews = Object.values(pageviews)[i];
            $('.tier-pageviews').text(xPageviews);  
            $('.payment').text('$' + finalPrice);  //ex: $16.00
            let rangeFilled = Object.values(rangeFill)[i];
            $('.range').css('background', rangeFilled);
        }
    }
}
// FUNCTION END

$('#tier-range').on('input', function() {
    checkPrice();
});

$('#toggle').on('change', function() {
    checkPrice();
});

$(window).on("load resize", function() {
    checkPrice();
    if ($(window).width() > 767) {
        $('.discount-text').text('25% discount');
    } else {
        $('.discount-text').text('-25%');
    }
});
