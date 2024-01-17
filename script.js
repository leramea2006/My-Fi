let register_btn = ducument.queryselector(".Regiter-btn");
let login_btn = ducument.queryselector(".Login-btn");
let form = ducument.queryselector(".Form-box");
register_btn.addEventListener("click",()=>{
	form.classList.add("change-form");
})
login_btn.addEventListener("click",()=>{
	form.classList.remove("change-form");
})
function openPage(pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
function myFunction() {
	var x = document.getElementById("myForm").elements.namedItem("uname").value;
  document.getElementById("demo").innerHTML = x;
  document.getElementById("Form").style.display = "none"


}

