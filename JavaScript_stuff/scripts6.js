function rgbRand () {
    var color = Math.floor(Math.random() * 256 );
    return color;
}

for ( var i = 0; i< 10; i += 1 ) {
    document.write('<div style="background-color:' + 'rgb(' + rgbRand(0 + ',' + rgbRand() + ',' + rgbRand + ')' + '"></div>');
}