// მოცემული გაქვთ პიცის ობიექტების მასივი
// Math.random - ით აიღეთ მასივიდან ნებისმიერი პიცა შემთხვევითობის პრინციპით
// გამოიტანეთ კონსოლში: "თქვენი პიცა {პეპერონი} მზადდება"
// 2 წამის მერე გამოიტანეთ კონსოლში: "თქვენი პიცა გზაშია"
// 5 წამის მერე გამოიტანეთ კონსოლში: "თქვენი პიცა ადგილზეა, ფასი - {20} ლარი"
// დროის საკონტროლებლად გამოიყენეთ setTimeout ფუნქცია
// ბონუსი: ბოლოს გამოიტანეთ კონსოლში შეკვეთის ხანგრძლივობა დაწყებიდან დასრულებამდე.

console.clear();

const pizzas = [
    {
        name: "პეპერონი",
        price: 20
    },
    {
        name: "მარგარიტა",
        price: 15
    },
    {
        name: "კომბინირებული",
        price: 22
    }

];


function allRandom(array){
    let random = Math.random(); // randomi 0-1
    let length = array.length; // obieqtebis sigrdze array-shi
    let randomIndex = Math.floor(random * length); // damrgvalebuli (mocemuli random ricxvisa da sigrdzis namravli)
    let randomObject = array[randomIndex]; // obieqti randomad

    return randomObject;
 
}


let randomPizza = allRandom(pizzas)


function making(){
    console.log("თქვენი პიცა " + randomPizza.name + " მზადდება");
    setTimeout(onWay, 2000);  
}

function onWay(){
    console.log("თქვენი პიცა გზაშია")
    setTimeout(delivery, 5000);
}

function delivery(){
   
    console.log("თქვენი პიცა ადგილზეა, ფასი " + randomPizza.price + "ლარი");
    
}

console.log(making());





