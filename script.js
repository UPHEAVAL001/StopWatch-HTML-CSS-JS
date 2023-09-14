(function(){
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var out = document.getElementById('out-put');

    var interval;
    var s = 0;
    var m , h ;

    // start button event

    start.addEventListener('click',function(){

        start.style.display='none';
        
        interval = setInterval(function(){
            s = s + 1;
            m = Math.floor(eval(s/60));
            console.log(m);
            mr = eval(s%60);
            console.log(mr)
            h = Math.floor(eval(m/60));
            hr = eval(m%60);
            if(s<60){
                out.innerText = "00."+s;
            }else if(s>60 && m<60){
                out.innerText = m + ':' + mr;
            }else if(m>60){
                out.innerText = h + ':' + hr + ':' + mr;
            }
            
        },1000)
    });

    // stop button event

    stop.addEventListener('click',function(){
        clearInterval(interval);
        start.style.display='flex';
    })

    // reset button event

    reset.addEventListener('click',function(){
        clearInterval(interval);
        location.reload();  // Alternative to below three lines
        // start.style.display='flex';
        // out.innerText='00.00';
        // s = 0.0;
    })
})();