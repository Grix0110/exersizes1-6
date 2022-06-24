(function (countries) {
    var inputField = $("input[name=country]");
    var results = $("#results");
    var lowerCaseCountries = countries.map(function (value, index) {
        return value.toLowerCase();
    });
    var body = $("body");

    var ARROW_UP = 38;
    var ARROW_DOWN = 40;
    var RETURN = 13;

    inputField
        .on("input", function () {
            var filteredCountries = getFilteredCountries(
                this.value.toLowerCase()
            );

            renderResultContent(filteredCountries.slice(0, 4));
        })
        .on("keydown", function (e) {
            // console.log(e.keyCode, e.key);
            // if (e.keyCode == 38 || e.keyCode == 40) {
            //     e.preventDefault();
            // } else {
            //     return;
            // }

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

    function getFilteredCountries(inputValue) {
        var filteredCountries = [];

        for (var i = 0; i < lowerCaseCountries.length; i++) {
            var currentCountry = lowerCaseCountries[i];
            if (currentCountry.indexOf(inputValue) == 0) {
                filteredCountries.push(countries[i]);
            }
        }

        return filteredCountries;
    }

    function renderResultContent(countries) {
        // @todo if there are no countries, display "no result"

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
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
