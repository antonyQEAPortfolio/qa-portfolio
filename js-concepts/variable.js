//var is function-scoped or globally-scoped and can be re-decleared and updated

function varExample(){
    var x = 1 ;
    if (true)
        {
        x = 2;
        console.log(x) // This will print 2
    }
    console.log(x) //This will also print 2 as we use var keyword it re-write
}
varExample()

//let is function-scoped and can be updated but not re-decleared within the scope

function letExample(){
    let x = 1 ;
    if (true)
        {
        let x = 2;
        console.log(x) //  This will print 2
    }
    console.log(x) //  This will print 1 as we use let keyword it wont re-write
}
letExample()

// const is block-scoped and cannot be updated or declared

function constExample(){
    const x = 5 ; 
    if(true){
        const x = 6;
        console.log(x); // This will print 6
    }
    console.log(x); // This will print 5

}
constExample();
