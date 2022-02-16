function changesize1(){
    size1.style.backgroundColor = '#A15EAB';
    size2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    size3.style.backgroundColor = 'rgba(255, 255, 255, 0)';

    boxmeio1.style.display = 'block';
    boxmeio2.style.display = 'none';
    boxmeio3.style.display = 'none';
}

function changesize2(){
    size1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    size2.style.backgroundColor = '#A15EAB';
    size3.style.backgroundColor = 'rgba(255, 255, 255, 0)';

    boxmeio1.style.display = 'none';
    boxmeio2.style.display = 'block';
    boxmeio3.style.display = 'none';
}

function changesize3(){
    size1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    size2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    size3.style.backgroundColor = '#A15EAB';

    boxmeio1.style.display = 'none';
    boxmeio2.style.display = 'none';
    boxmeio3.style.display = 'block';
}

var boxmeio1 = document.getElementById('boxmeio1')
var boxmeio2 = document.getElementById('boxmeio2')
var boxmeio3 = document.getElementById('boxmeio3')

var size1 = document.getElementById('size1')
size1.addEventListener('click', changesize1)

var size2 = document.getElementById('size2')
size2.addEventListener('click', changesize2)

var size3 = document.getElementById('size3')
size3.addEventListener('click', changesize3)

var size4 = document.getElementById('size4')
size4.addEventListener('click', changesize2)

var size5 = document.getElementById('size5')
size5.addEventListener('click', changesize3)