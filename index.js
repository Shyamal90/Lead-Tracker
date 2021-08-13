const inputBtn = document.getElementById("input-btn");
let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("inut-el");
let ulEl = document.getElementById("ulEl");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
// console.log(tabBtn);

// localStorage.setItem("myLeads","www.google.com");
// let name = localStorage.getItem("myLeads");
// console.log(name);
// localStorage.clear();
deleteBtn.addEventListener("click",function(){
    // console.log("double clicked!");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})


// const tabs =[
//             {url:"http://www.linkedin.com/in/per-harald-borgen/"}
// ];

tabBtn.addEventListener("click",function(){

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    }) 
})


let leadsFromLocalStroage =JSON.parse(localStorage.getItem("myLeads"));
 if(leadsFromLocalStroage){
     myLeads = leadsFromLocalStroage;
     render(myLeads);
 }

// localStorage.clear();



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value =" ";
    // console.log(myLeads);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    // console.log(localStorage.getItem("myLeads"));
})


function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // listItems +="<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        // ulEl.innerHTML +="<li>" +  myLeads[i] + "</li>" ;
        // document.write();
        // let li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
        listItems +=`<li> 
                       <a target='_blank' href='${ leads[i] }'>
                            ${leads[i]} 
                       </a>
                    </li>`;

    }
    ulEl.innerHTML = listItems;

}


// document.getElementsByTagName("li");
