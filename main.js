menu_list_array = ["Veg Margherita Pizza", "Cheese Pizza", "Pepperoni Pizza", "Hawaiian Pizza", "Chicken Pizza", "Sausage Pizza", "Bacon Pizza" ] ;//add more items
                  

function getmenu(){
var htmldata="";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function addItem(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
//document.getElementById("display_menu").innerHTML = menu_list_array;


        // use the sort function as - menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            //htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
            htmldata=htmldata+ menu_list_array[i]+'<br>';
        }
	
        //alert(htmldata)
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

