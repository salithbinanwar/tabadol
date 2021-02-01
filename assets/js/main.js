$(document).ready(function () {
    AOS.init();
});

//onClick show password functionality ---------------------------//
function showOldPass() {
    $(document).ready(function () {
        $('#oldPass').attr('type') === 'password' ? $('#oldPass').attr('type', 'text') : $('#oldPass').attr('type', 'password')
    });
}

//onClick show password functionality ---------------------------//
function showNewPass() {
    $(document).ready(function () {
        $('#newPass').attr('type') === 'password' ? $('#newPass').attr('type', 'text') : $('#newPass').attr('type', 'password')
    });
}

//showing map functionality ----------------------------------//
function myMap() {
    $(document).ready(function () {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    })
}




function readFile(){
    const fileList = event.target.files.length;
    if(fileList > 10){
        alert('Only 10 photoes can be selected');
    }else{
        document.getElementById('files-list').innerHTML = 'Selected Images: '+fileList;
    }
}