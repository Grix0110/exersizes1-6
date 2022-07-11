(function () {
    var inputField = $("input[name=country]");
    var body = $("body");
    var results = $("#results");

    inputField.on("input", function () {
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: inputField.val(),
            },
            success: function (data) {
                setTimeout(function(){
                    renderResultContent(data);
                    console.log(data);
                },150);
            },
        });
    });

    function renderResultContent(countries) {

        var html = "";

        if (countries.length > 0) {
            for (var i = 0; i < countries.length; i++) {
                var currentCountry = countries[i];

                html +=
                    '<div class="result" title="' +
                    currentCountry +
                    '">' +
                    currentCountry +
                    "</div>";
            }
        } else {
            html +=
                '<div class="result" title="' +
                currentCountry +
                '">' +
                "No Result" +
                "</div>";
        }

        results.html(html);
        results.show();
    }

    inputField
        .on("keydown", function (e) {
            var key = {
                up: 38,
                down: 40,
                enter: 13,
            };

            var keyCode = e.keyCode;

            if (keyCode == key.down) {
                var resultCountries = results.children();
                if (resultCountries.length == 0) {
                    return;
                }
                var highlighted = $(".highlighted");
                var newIndex = 0;
                if (highlighted.length > 0) {
                    var highIndex = resultCountries.index(highlighted);
                    newIndex = highIndex + 1;
                }
                resultCountries.removeClass("highlighted");
                resultCountries.eq(newIndex).addClass("highlighted");
            } else if (keyCode == key.up) {
                resultCountries = results.children();
                if (resultCountries.length == 0) {
                    return;
                }
                highlighted = $(".highlighted");
                newIndex = 0;
                if (highlighted.length > 0) {
                    highIndex = resultCountries.index(highlighted);
                    newIndex = highIndex - 1;
                }
                resultCountries.removeClass("highlighted");
                resultCountries.eq(newIndex).addClass("highlighted");
            } else if (keyCode == key.enter) {
                console.log("ENTER");
                console.log(e.target);
                inputField.val($(".highlighted").attr("title"));
                results.hide();
            }
        })
        .on("click", function () {
            results.show();
        });

    results
        .on("mouseover", function (e) {
            $(".result.highlighted").removeClass("highlighted");
            $(e.target).addClass("highlighted");
        })
        .on("mousedown", function (e) {
            console.log("in mousedown: ", e.target);
            inputField.val($(e.target).attr("title"));
            // results.hide();
        });

    body.on("mousedown", function () {
        results.hide();
    });
})();