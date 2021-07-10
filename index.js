function add() {
    // preventDefault()
    let username = document.getElementById("username").value;
    let fhname = document.getElementById("fhname").value;
    let sex = document.getElementById("sex").value;
    let age = document.getElementById("age").value;
    let adhaar = document.getElementById("adhaar").value;
    let address = document.getElementById("address").value;
    let mobile = document.getElementById("mobile").value;


    let myInfo = {
        usernameO: username,
        fhnameO: fhname,
        sexO: sex,
        ageO: age,
        adhaarO: adhaar,
        addressO: address,
        mobileO: mobile

    }

    let RSSB_LIST = localStorage.getItem("RSSB_LIST");
    if (RSSB_LIST == null) {
        rssbObj = [];

    }
    else {
        rssbObj = JSON.parse(RSSB_LIST);
    }

    rssbObj.push(myInfo);

    localStorage.setItem("RSSB_LIST", JSON.stringify(rssbObj));
    console.log(localStorage);
    createTable();
    window.location.reload();
}



let str = `
<table class="table">
<thead>
    <tr>
        <th>S.no</th>
        <th>Name</th>
        <th>Father/Husband Name</th>
        <th>Sex</th>
        <th>Age</th>
        <th>Adhaar No.</th>
        <th>Address</th>
        <th>Mobile</th>
        <th></th>
        <th></th>
    </tr>
</thead>
<tbody>




`

let strend = `
</tbody>
</table>`;


createTable();
function createTable() {
    let RSSB_LIST = localStorage.getItem("RSSB_LIST");
    if (RSSB_LIST == null) {
        rssbObj = [];

    }
    else {
        rssbObj = JSON.parse(RSSB_LIST);
    }

    rssbObj.forEach(function (element, index) {
        str += `
        
        <tr>

        <td>${index + 1}</td>
        <td>${element.usernameO}</td>
        <td>${element.fhnameO}</td>
        <td>${element.sexO}</td>
        <td>${element.ageO}</td>
        <td>${element.adhaarO}</td>
        <td>${element.addressO}</td>
        <td>${element.mobileO}</td>
        <th><i onclick="editInfo(${index})" id="edit_${index}" class="material-icons">edit</i></th>
        <th><i onclick="deleteInfo(${index})" id="delete_${index}" class="material-icons">delete</i></th>
    </tr>
        `
    });

    str += strend;

    document.getElementById("DyanmicTable").innerHTML = str;

}


function deleteInfo(index) {
    console.log('delete pressed', index)

    let RSSB_LIST = localStorage.getItem("RSSB_LIST");
    if (RSSB_LIST == null) {
        rssbObj = [];
    }
    else {

        rssbObj = JSON.parse(RSSB_LIST);
    }

    rssbObj.splice(index, 1);

    localStorage.setItem("RSSB_LIST", JSON.stringify(rssbObj));
    window.location.reload();
    createTable();
}

function editInfo(index) {
    console.log('delete pressed', index)

    let RSSB_LIST = localStorage.getItem("RSSB_LIST");
    if (RSSB_LIST == null) {
        rssbObj = [];
    }
    else {
        rssbObj = JSON.parse(RSSB_LIST);
    }

    document.getElementById("username").value = rssbObj[index].usernameO
    document.getElementById("fhname").value = rssbObj[index].fhnameO
    document.getElementById("sex").value = rssbObj[index].sexO
    document.getElementById("age").value = rssbObj[index].ageO
    document.getElementById("adhaar").value = rssbObj[index].adhaarO
    document.getElementById("address").value = rssbObj[index].addressO
    document.getElementById("mobile").value = rssbObj[index].mobileO

    document.getElementById("editInfoSave").addEventListener('click', function () {

        rssbObj[index].usernameO = document.getElementById("username").value
            rssbObj[index].fhnameO = document.getElementById("fhname").value
            rssbObj[index].sexO = document.getElementById("sex").value
            rssbObj[index].ageO = document.getElementById("age").value
            rssbObj[index].adhaarO =  document.getElementById("adhaar").value
            rssbObj[index].addressO = document.getElementById("address").value
            rssbObj[index].mobileO = document.getElementById("mobile").value
            localStorage.setItem("RSSB_LIST", JSON.stringify(rssbObj));
            window.location.reload();
})



    createTable();
}


function deleteprev(){
    let yes = confirm("delete previous details");

    if(yes==true)
    {
        localStorage.clear();
        window.location.reload();
    }
}