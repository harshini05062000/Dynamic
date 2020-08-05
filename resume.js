function getjson(file,callback){
   var xhr = new XMLHttpRequest();
   xhr.overrideMimeType("applicaton/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function() {
     if (xhr.readyState===4 && xhr.status== "200") {
     	callback(xhr.responseText);
     }
   }
xhr.send();
}
getjson("data1.json",function(text) {
	var data=JSON.parse(text);
	console.log(data);
	mydetails(data.details);
  skills(data.techskills);
  hobby(data.hobbies);
  education(data.educationalqualification);
  objective(data.careerobjective);
  declare(data.declaration);
  pro(data.projects);
})
var parent = document.querySelector(".parent-div");
var parent2 =document.querySelector(".left-div");
function mydetails(apssdc){
  var d=document.createElement("div");
  d.classList.add("Basicdetails");
  parent2.appendChild(d);
  var i=document.createElement("img");
  i.src="https://i.ytimg.com/vi/gaScYKVRLAM/maxresdefault.jpg";
  i.alt="download";
  d.appendChild(i);
    var name=document.createElement("h4");
     name.classList.add("name");
     name.setAttribute("id","name");
     name.textContent=apssdc.name;
     d.appendChild(name);


      var email=document.createElement("p");
     email.classList.add("email");
     email.textContent=apssdc.email;
     d.appendChild(email);
     var number=document.createElement("p");
     number.classList.add("number");
     number.textContent=apssdc.number;
     d.appendChild(number);
     var address=document.createElement("p");
     address.classList.add("address");
     address.textContent=apssdc.address;
     d.appendChild(address);
      d.appendChild(document.createElement("hr"));
    
}
function skills(S){
  var d=document.createElement("div");
  d.classList.add("skills:");
  parent2.appendChild(d);
  var p2=document.createElement("h1");
  p2.textContent="skills:"
  d.appendChild(p2);
  ol=document.createElement("ol");
  for(var i=0;i<S.length;i++) {
    var li=document.createElement("li");
li.textContent=S[i];
ol.appendChild(li); 
}
d.appendChild(ol);
d.appendChild(document.createElement("hr"));
}
function hobby(H){
  var d=document.createElement("div");
  d.classList.add("hobbies:");
  parent2.appendChild(d);
  var p2=document.createElement("h1");
  p2.textContent="hobbies:"
  d.appendChild(p2);
  ul=document.createElement("ul");
  for(var i=0;i<H.length;i++) {
    var li=document.createElement("li");
li.textContent=H[i];
ul.appendChild(li); 
}
d.appendChild(ul);
}
var parent1 = document.querySelector(".main-div");
function education(E) {
  var d=document.createElement("div");
  d.classList.add("education:");
  parent1.appendChild(d);
  var h=document.createElement("h1");
  h.textContent="education:"
  d.appendChild(h);
    var table=document.createElement("table");
    var row="";
    for (var i =0;i<E.length;i++) {
      row+="<tr><td>"+E[i].sno+"</td><td>"+E[i].institute+"</td><td>"+E[i].degree+"</td><td>"+E[i].university+"</td><td>"+E[i].passoutyear+"</td><td>"+E[i].percentile+"</td></tr>";

    }
    table.innerHTML=row;
    d.appendChild(table);
    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("hr"));
    d.appendChild(document.createElement("br"));

}
function objective(O) {
  var d=document.createElement("div");
  d.classList.add("objective:");
  parent1.appendChild(d);
  var p1=document.createElement("p");
  var p2=document.createElement("h1");
  p2.textContent="objective:"
  d.appendChild(p2);
  p1.classList.add("para");
  p1.textContent=O.info;
     d.appendChild(p1);
     d.appendChild(document.createElement("br"));
     d.appendChild(document.createElement("hr"));
     d.appendChild(document.createElement("br"));

}
function declare(D) {
  var d=document.createElement("div");
  d.classList.add("declare:");
  parent1.appendChild(d);
  var p=document.createElement("p");
  var p2=document.createElement("h1");
  p2.textContent="declare:"
  d.appendChild(p2);
  p.classList.add("para1");
  p.textContent=D.info;
     d.appendChild(p);
     d.appendChild(document.createElement("br"));
     d.appendChild(document.createElement("hr"));
     d.appendChild(document.createElement("br"));
}
function pro(p){
  var d=document.createElement("div");
  d.classList.add("projects:");
  parent1.appendChild(d);
  var h=document.createElement("h1");
  h.textContent="projects:"
  d.appendChild(h);

  ol=document.createElement("ol");
  for(var i=0;i<p.length;i++) {
    var li=document.createElement("li");
li.textContent=p[i];
ol.appendChild(li); 
}
d.appendChild(ol);
d.appendChild(document.createElement("br"));
d.appendChild(document.createElement("hr"));
d.appendChild(document.createElement("br"));
}
