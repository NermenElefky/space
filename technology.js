let items_p = document.querySelector(".items");
let content_d = document.querySelector(".content");

items_p.addEventListener("click",(e)=>{
    // check if the clicked area is item or space
    if (e.target.classList.contains("tec")){
        // remove the active from the item that has active class 
        items_p.querySelector(".active").classList.remove("active");
        // add active class to the clicked item
        e.target.classList.add("active");

        let data_name_of_selected_item = e.target.getAttribute("data-name");
        console.log(data_name_of_selected_item)
        // now add the hide class to the div that has the show class
        content_d.querySelector(".show").classList.add("hide");
        // now  remove the show class from it 
        content_d.querySelector(".show").classList.remove("show");
        
        // now remove the hide class from the div that has the same data-name
        content_d.querySelector(`[data-name = ${data_name_of_selected_item}]`).classList.remove("hide");
        content_d.querySelector(`[data-name = ${data_name_of_selected_item}]`).classList.add("show");

    }
})