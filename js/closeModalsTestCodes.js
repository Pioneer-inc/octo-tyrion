
setTimeout(function() { $('#autoPayModal').modal('hide'); }, 4000);


var hideInterval = 4000;

setTimeout(function() { $('#autoPayModal').modal('hide'); }, hideInterval);

var myModal = $('#autoPayModal').on
    ('shown.bs.modal', function() 
        {
            clearTimeout(myModal.data('hideInterval'))
            var id = setTimeout
                (
                    function()
                        {
                            myModal.modal('hide');
                        }
                );
            myModal.data('hideInterval', id);
        }
    );


var myModal = $('#myModal').on('shown.bs.modal', function () {
    clearTimeout(myModal.data('hideInterval'))
    var id = setTimeout(function(){
        myModal.modal('hide');
    });
    myModal.data('hideInterval', id);
})



setTimeout(function() {$('#autoPayModal').modal('hide');}, 5000);


var mins;
            var secs;
            function cd() {
                mins = 1 * m("");
                secs = 0 + s(":"); // change seconds here (always add an additional second to your total)
                console.log(mins);
                console.log(secs);
                redo();
            }
            function m(obj) {
                for(var i = 0; i ";
                if(mins :";
                disp += "";
                if(secs ";
                return(disp);
            }
            function redo() {
                secs--;
                if(secs == -1) {
                    secs = 59;
                    mins--;
                }
                $('#autoPayModal').on('shown', function() {
                    // remove previous timeouts if it's opened more than once.
                    clearTimeout(myModalTimeout);

                    // hide it after a minute
                    myModalTimeout = setTimeout(function() {
                        $('#autoPayModal').modal('hide');
                    }, 5000);
                });
                document.getElementById('timer_container').innerHTML = dis(mins,secs); 
                if((mins == 1) && (secs == 45)) {
                    $("#autoPayModal").modal('show');
                    $('#autoPayModal').on('shown', function() {
                        // remove previous timeouts if it's opened more than once.
                        clearTimeout(myModalTimeout);

                        // hide it after a minute
                        myModalTimeout = setTimeout(function() {
                            $('#autoPayModal').modal('hide');
                        }, 5000);
                    });
                    $('.timer-inc').click(function(){
                        $("#autoPayModal").modal('hide');
                        href="includes/setSessionTime.php";
                        $.ajax({ 
                            type: "POST",
                            //data : {cat:"hai"},
                            cache: false,
                            url: href,   
                            success: function(data){
                                console.log(data);
                               $("#results").html(data);              
                            } 
                        });
                    });

                    $('.timer-close').click(function(){
                        $("#autoPayModal").modal('hide');
                        href="includes/clearcart.php";
                        $.ajax({ 
                            type: "POST",
                            //data : {cat:"hai"},
                            cache: false,
                            url: href,   
                            success: function(data){
                                console.log(data);
                               $("#results").html(data);              
                            } 
                        });
                    });

                    $('#autoPayModal').on('hidden', function () {
                        href="includes/clearcart.php";
                        $.ajax({ 
                            type: "POST",
                            //data : {cat:"hai"},
                            cache: false,
                            url: href,   
                            success: function(data){
                                console.log(data);
                               $("#results").html(data);              
                            } 
                        });    
                    });
                }
                else if((mins == 0) && (secs == 00)){
                    $("#autoPayModal").modal('hide');
                    href="includes/clearcart.php";
                        $.ajax({ 
                            type: "POST",
                            //data : {cat:"hai"},
                            cache: false,
                            url: href,   
                            success: function(data){
                                console.log(data);
                               $("#results").html(data);              
                            } 
                        });
                }
                else {
                    cd = setTimeout("redo()",1000);
                }
            }
            function init() {
                cd();
            }