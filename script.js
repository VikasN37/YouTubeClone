// for searchbox

let mag_icon = document.getElementById("mag2");
let searchbox = document.getElementById("searchbox");
let search_after_expand = document.getElementById("search");
let searchbutton = document.getElementById("searchbutton");
let header = document.getElementById("header");
let category = document.getElementById("categories");
let restricted_mode = document.getElementById("restric");
let view = document.getElementsByClassName("class33");
let thumbnail = document.getElementsByClassName("thumbnail");

let description = document.getElementsByClassName("description");
let description2 = document.getElementsByClassName("description2");

searchbox.addEventListener('focus', function () {
    mag_icon.style.visibility = 'visible';
    searchbox.style.border = 'none';
    search_after_expand.style.cssText = 'border :1px solid blue';



});
searchbox.addEventListener('blur', function () {
    mag_icon.style.visibility = 'hidden';
    searchbox.style.border = '1px solid grey';
    search_after_expand.style.border = 'none';

});


// setting

// gmail-click
{
    let gmail = document.getElementById("gmail");
    let setting = document.getElementById("setting")
    let gmail_click = 1;


    gmail.addEventListener('click', function () {

        gmail_click++;

        if (gmail_click % 2 == 0) {
            setting.style.display = "block";
        }
        else {
            setting.style.display = "none";
        }
    });

}

let bar_clicked = 1;
let click = 1;


// theme
let theme = document.getElementById("theme");
let icon_color = document.getElementsByClassName("colors");
let categories_color = document.getElementsByClassName("categorieslicolor");



theme.addEventListener('click', function () {
    let k = ++click;
    if (k % 2 == 0) {

        theme.innerHTML = "Appearance : Dark";
        document.body.style = "background-color :black; color :white";
        // setting.style="background-color :red";
        for (let y of icon_color) {

            y.style = "color :white";
        }

        for (let z of categories_color) {
            z.style = "background-color : rgb(39,39,39); color :white";
        }

        setting.style = "background-color:black";
        header.style = "background-color :black";
       
        searchbox.style = "background-color :black; border :1px solid grey ;  opacity :0.8 ;color :white";
        searchbutton.style = "background-color :black ; border :1px solid grey ; opacity :0.8";

        if(bar_clicked%2==0)
        {
            category.style="margin-left :100px; background-color:black ;";
            
        }
        else
        {
            category.style="margin-left :190px; background-color:black ;";
        }



    }
    else {
        theme.innerHTML = "Appearance : Light";
        document.body.style = "background-color :white; color :black";
        for (let y of icon_color) {

            y.style = "color :black";
        }

        for (let z of categories_color) {
            z.style = "background-color : rgb(242,242,242); color :black";
        }
        setting.style = "background-color:white";
        category.style = "background-color :white";
        header.style = "background-color :white";
        searchbox.style = "background-color :white";
        searchbutton.style = "background-color :white ; border :1px solid :black";


        if(bar_clicked%2==0)
        {
            category.style="margin-left :100px;background-color:white ;";
        }
        else
        {
            category.style="margin-left :190px;background-color:white ;";
        }

    }

})

// restricted mode

let res_click = 1;
restricted_mode.addEventListener('click', function () {
    let ab = ++res_click;
    if (ab % 2 == 0) {
        if (confirm('Enable restricted mode ?')) {
            restricted_mode.innerHTML = "Restricted Mode : ON ";
        }

    }
    else {
        restricted_mode.innerHTML = "Restricted Mode : OFF ";
    }
})

// sidebar

let main = document.getElementById("main");

let sidebar_after = document.getElementById("sidebar_after");
let sidebar = document.getElementById("sidebar");
let bar = document.getElementById("bars");


bar.addEventListener('click', function () {
    let p = ++bar_clicked;
    if (p % 2 == 0) {
        sidebar.style = "display:none";
        sidebar_after.style = "display:inline-block";
        main.style = "margin-left:120px; margin-top :125px";
        category.style = "margin-left :120px;";


        for (let k of view) {
            k.style = "width :320px ; height:200px ;font-size:38px ;margin :4px;";
        }

        for (let t of thumbnail) {
            t.style = "height:190px";
        }


        for(let z of description)
        {
            z.style="font-size :13.5px; ";
        }
        for(let m of description2)
        {
            m.style="font-size :11px;";
        }
        if (click % 2 == 0) {
            category.style = "background-color:black; margin-left :100px;";
        }
        else {
            category.color = "background-color :white; margin-left :100px;"
        }
        
    }
    else {
        sidebar.style = "display:inline-block";
        sidebar_after.style = "display:none";
        main.style = "margin-left:220px; margin-top :140px";
        for (let k of view) {
            k.style = "width :380px ; height:280px ";
        }

        for (let t of thumbnail) {
            t.style = "height:205px";
        }
        category.style = "margin-left:190px;";

        if (click % 2 == 0) {
            category.style = "background-color:black;";
        }
        else {
            category.color = "background-color :white;"
        }

        for(let z of description)
        {
            z.style="font-size :14px; ";
        }
        for(let m of description2)
        {
            m.style="font-size :12px;";
        }
    }
}
)
