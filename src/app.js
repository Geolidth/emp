/*
* File: app.js
* Author: Csajbók-Reményi László
* Copyright: 2023, Csajbók-Reményi László
* Group: Szoft I/2/E
* Date: 2023-02-23
* Github: https://github.com/Geolidth/emp
* Licenc: GNU GPL
*/

const tbody=document.querySelector('#tbody');
var emplist = [
    {id: 1, name: "Gibsz Jakab", city: "Szeged", salary: 345},
    {id: 2, name: "Gibsz János", city: "Budapest", salary: 445},
    {id: 3, name: "Gibsz Gabriella", city: "Pécs", salary: 545},
    {id: 4, name: "Gibsz Károly", city: "Putnok", salary: 645},
    {id: 5, name: "Gibsz Hugó", city: "Ozora", salary: 745},
    {id: 6, name: "Gibsz Amarilla", city: "Szatymaz", salary: 845},
];

(function creatTable(){
emplist.forEach((emp)=>{
    console.log(emp.name);
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdSalary = document.createElement('td');

    tdId.textContent= emp.id;
    tdName.textContent= emp.name;
    tdCity.textContent= emp.city;
    tdSalary.textContent= emp.salary;

    tbody.append(tr);
    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdCity);
    tr.append(tdSalary);
});})();