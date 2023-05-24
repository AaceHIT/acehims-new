$(function () {

    // ColorPicker
    $(".colorpicker").colorpicker();

    // Masked Inputs
    $("#phone").mask("(999) 999-9999");
    $("#phone-ex").mask("(999) 999-9999? x99999");
    $("#tax-id").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
    $("#product-key").mask("a*-999-a999");

    // Masked Input
    var $demoMaskedInput = $(".demo-masked-input");

    // Date
    Inputmask({
        "mask": "99/99/9999",
        "placeholder": "dd/mm/yyyy",
    }).mask(".datemask");

    // Time 12Hr
    Inputmask({
        "mask": "11:22",
        "placeholder": "hh:mm",
    }).mask(".time12");

    // 
    $demoMaskedInput.find(".time24").inputmask("hh:mm", {
        placeholder: "__:__ _m",
        alias: "time24",
        hourFormat: "24",
    });

    //Date Time
    $demoMaskedInput.find(".datetime").inputmask("d/m/y h:s", {
        placeholder: "__/__/____ __:__",
        alias: "datetime",
        hourFormat: "24",
    });

    //Mobile Phone Number
    $demoMaskedInput.find(".mobile-phone-number").inputmask("+99 (999) 999-99-99", {
        placeholder: "+__ (___) ___-__-__"
    });

    //Phone Number
    $demoMaskedInput.find(".phone-number").inputmask("+99 (999) 999-99-99", {
        placeholder: "+__ (___) ___-__-__"
    });

    //Dollar Money
    $demoMaskedInput.find(".money-dollar").inputmask("99,99 $", {
        placeholder: "__,__ $"
    });

    //IP Address
    $demoMaskedInput.find(".ip").inputmask("999.999.999.999", {
        placeholder: "___.___.___.___"
    });

    //Credit Card
    $demoMaskedInput.find(".credit-card").inputmask("9999 9999 9999 9999", {
        placeholder: "____ ____ ____ ____"
    });

    //Email
    $demoMaskedInput.find(".email").inputmask({ alias: "email" });

    //Serial Key
    $demoMaskedInput.find(".key").inputmask("****-****-****-****", {
        placeholder: "____-____-____-____"
    });

    // Multiselect
    $("#multiselect1, #multiselect2, #single-selection, #multiselect5, #multiselect6").multiselect({
        maxHeight: 300,
        // includeSelectAllOption: true,
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle btn btn-select" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
        },
    });

    //Multi-select
    $("#optgroup").multiSelect({ selectableOptgroup: true });

    //Range Example
    var rangeSlider = document.getElementById("nouislider_range_example");
    noUiSlider.create(rangeSlider, {
        start: [32500, 62500],
        connect: true,
        range: {
            min: 25000,
            max: 100000,
        },
    });
    getNoUISliderValue(rangeSlider, false);

    // Select2 selectbox
    $(".select2").select2();

    $(".search-select").select2({
        allowClear: true,
    });

    $("#max-select").select2({
        placeholder: "Select",
        maximumSelectionSize: 2,
    });

    $("#loading-select").select2({
        placeholder: "Select",
        minimumInputLength: 1,
        query: function (query) {
            var data = { results: [] },
                i,
                j,
                s;
            for (i = 1; i < 5; i++) {
                s = "";
                for (j = 0; j < i; j++) {
                    s = s + query.term;
                }
                data.results.push({ id: query.term + i, text: s });
            }
            query.callback(data);
        },
    });
    var data = [
        { id: 0, tag: "enhancement" },
        { id: 1, tag: "bug" },
        { id: 2, tag: "duplicate" },
        { id: 3, tag: "invalid" },
        { id: 4, tag: "wontfix" },
    ];
    function format(item) {
        return item.tag;
    }

    $("#array-select").select2({
        placeholder: "Select",
        data: { results: data, text: "tag" },
        formatSelection: format,
        formatResult: format,
    });

    $("#multiselect3-all").multiselect({
        includeSelectAllOption: true,
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle btn btn-select" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
        },
    });

    $("#multiselect4-filter").multiselect({
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        maxHeight: 200,
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle btn btn-select" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
        },
    });

    $("#multiselect-size").multiselect({
        buttonClass: "btn btn-secondary btn-sm",
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle btn-sm btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
        },
    });

    $("#multiselect-link").multiselect({
        buttonClass: "btn btn-link",
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
        },
    });

    $("#multiselect-color").multiselect({
        buttonClass: "btn btn-primary",
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
        },
    });

    $("#multiselect-color2").multiselect({
        buttonClass: "btn btn-success",
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
        },
    });

    // Date picker
    $(".inline-datepicker").datepicker({
        todayHighlight: true,
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
        },
    });
});

//Get noUISlider Value and write on
function getNoUISliderValue(slider, percentage) {
    slider.noUiSlider.on("update", function () {
        var val = slider.noUiSlider.get();
        if (percentage) {
            val = parseInt(val);
            val += "%";
        }
        $(slider).parent().find("span.js-nouislider-value").text(val);
    });

}

//noUISlider
var sliderBasic = document.getElementById("nouislider_basic_example");
noUiSlider.create(sliderBasic, {
    start: [30],
    connect: "lower",
    step: 1,
    range: {
        min: [0],
        max: [100],
    },
});
getNoUISliderValue(sliderBasic, true);

// TagsInput Custom Class
$('.tagsinput').tagsinput({
    tagClass: 'badge bg-primary'
});