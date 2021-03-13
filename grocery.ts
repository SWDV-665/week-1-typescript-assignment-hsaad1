class Grocery {
    groceryListName='';
	groceryList=[];
	listName='';
	Grocery22 =[];
    constructor() {
        this.groceryListName = this.listName;
    }
	
}


class GroceryItem {
    itemName= '';
	quantity= '';
	category= '';
	item=''
	constructor() {
		this.itemName = this.item;
		this.quantity = this.quantity;
		this.category = this.category;
	}
}

 



this.Grocery22=[
            {
                name:'Apple',
                Quantity:'50'
            },
            {
                name:'Milk',
                Quantity:'40'
            },
            {
                name:'eggs',
                Quantity:'21'
            },
            {
                name:'bread',
                Quantity:'12'
            },
            {
                name:'vegitables',
                Quantity:'100'
            }
    ]


document.body.innerHTML += "<h2><strong><pre>Items &Tab;&Tab;    Quantity &Tab;</pre></strong></h2>"
 
for(var i = 0;i<this.Grocery22.length;i++) {
	 
	document.body.innerHTML += "<h2><p><pre>" + this.Grocery22[i].name + "&Tab;&Tab;" + this.Grocery22[i].Quantity.toString() +"</pre></p></h2>";
}