(function () {
    var input = $('#text');
    
    var button = $('button');

    button.on('click', function(){
        
        function validateJson(text){
            try {
                JSON.parse(text);
                alert("this is a JSON");
            } catch {
                alert("this is not a JSON");
            }
        }
        validateJson(input.val());
        
    });
})();
