function isEmpty(obj) {
    return obj.hasOwnProperty()
}
let book1 = new Object(); 
book1 = {
    title: "Фиорефикано",
    pubYear: 2013,
    price: 321,
    show: function () {
        console.log(this.title);
        console.log(this.price);
    }
};  

console.log(isEmpty(book1));

let book2 = new Object();
book2.title = Чинпачо';
book2.pubYear = 2013;
book2.price = 2010;

for (let i in book2) console.log(book2[i]);
console.log(isEmpty(book2));

book1.show();

book2.show = function showBook() {
    console.log(this.title);
    console.log(this.price);
}

book2.show();
