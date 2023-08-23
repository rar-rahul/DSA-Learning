//recursion tree 

function fabunaciiSeries(n) { 

    if(n == 0){
        return 0
    }
    if(n == 1){
        return 1
    }

    //recursive call 
    let recCall1 = fabunaciiSeries(n-1);
    let recCall2 = fabunaciiSeries(n-2);

    let smallcal = recCall1 + recCall2

    return smallcal
}