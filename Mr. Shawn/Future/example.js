function myFuction(fruit) {
    let t = 0;
    for (let i=4 ; i<=10; i++){
        if (fruit == "apple") {
            t+=2;
        }else if (fruit == "orange") {
            t+=5;
        }else{
            t+=1;
        }
    }
    return t;
}
myFuction("oranges");