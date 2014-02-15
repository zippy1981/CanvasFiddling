$(document).ready(function() {
    $('#btnDoIt').click(function() {
        $("#theForm").ajaxSubmit({
            dataType: null,
            success: function(data) {
                var imageData = new Uint8Array(data.length);
                for(var i=0, j=data.length; i<j; ++i){
                    imageData[i]=data.charCodeAt(i);
                }
                var blob = new Blob([imageData], {type: "image/jpeg"});
                var url = URL.createObjectURL(blob);

                var img = new Image();
                var context = document.getElementById('myCanvas').getContext("2d");
                img.onload = function() {
                    /// draw image to canvas
                    context.drawImage(url, 1,1);
                };
                img.onerror = function(error) {
                    console.error(error);
                };
                img.src = url;
            }
        });
    });
});
