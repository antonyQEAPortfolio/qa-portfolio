// A callback function is a function that is passed as an argument to another function 
// and is executed later, usually after some operation is completed.

function fetchData(callback){
    setTimeout( ()=>
    {
        console.log("Data Fetched!");
        const data = "Sample Data";
        callback(data)
    }, 2000);
}
function processData(data){
    console.log("Processing data", data);
}
function modifyData(data){
    console.log("Modify Data", data);
}

fetchData(processData);
fetchData(modifyData);