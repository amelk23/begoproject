function lastModifiedDate(){
    var newDate = new Date(document.lastModified);
    document.getElementById('lastMod').innerHTML = newDate;
}