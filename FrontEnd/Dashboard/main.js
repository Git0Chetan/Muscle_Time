// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

let dashboard=document.getElementsByClassName("cardBox")[0];
let customer=document.getElementsByClassName("details")[0];
let trainer=document.getElementsByClassName("recentCustomers")[0];


customer.style.display="none";
dashboard.style.display="none";
// trainer.style.display="none";

function dash(){
  customer.style.display="none";
  dashboard.style.display="grid";
  // trainer.style.display="none";
}

function cust(){
  customer.style.display="grid";
  dashboard.style.display="none";
  // trainer.style.display="none";
}

function train(){
    customer.style.display="none";
    dashboard.style.display="none";
    // trainer.style.display="grid";
}