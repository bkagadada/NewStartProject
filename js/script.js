//Search-Bar box..
document.getElementById("search").addEventListener("click", toggleSearch);

function toggleSearch(e) {
    e.stopPropagation();
    document.getElementById("search_input").classList.toggle("search-input-open");


}
document.addEventListener("click", closeSearch);

function closeSearch(event) {
    if (!event.target.matches('.search-input')) {
        document.getElementById("search_input").classList.remove("search-input-open");
    }
}
//Search-Bar clearing event..
function clearThis(target) {
    target.value = "";
}

//Menu bar opening and closing
document.getElementById("menu").addEventListener("click", toggleMenu);

function toggleMenu(e) {
    e.stopPropagation();
    document.getElementById("myDropdown").classList.toggle("dropdown-content-open");


}
document.addEventListener("click", closeMenu);

function closeMenu(event) {
    if (!event.target.matches('.dropdown-content')) {
        document.getElementById("myDropdown").classList.remove("dropdown-content-open");
    }
}

//Table Created
var activityLog = [
        { "proposalName": "Adidas01", "clients": "Adidas", "lastUpdate": "01/10/2017", "status": "In Progress" },
        { "proposalName": "Adidas02", "clients": "Adidas", "lastUpdate": "02/10/2017", "status": "In Progress" },
        { "proposalName": "Adidas03", "clients": "Adidas", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Adidas04", "clients": "Adidas", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Adidas05", "clients": "Adidas", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Adidas06", "clients": "Adidas", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Adidas07", "clients": "Adidas", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Nike01", "clients": "Nike", "lastUpdate": "03/10/2017", "status": "Proposed" },
        { "proposalName": "Nike02", "clients": "Nike", "lastUpdate": "03/10/2017", "status": "Proposed" },
        { "proposalName": "Nike03", "clients": "Nike", "lastUpdate": "03/10/2017", "status": "Proposed" },
        { "proposalName": "Nike04", "clients": "Nike", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Nike05", "clients": "Nike", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Nike06", "clients": "Nike", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Bata08", "clients": "Bata", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Bata01", "clients": "Bata", "lastUpdate": "03/10/2017", "status": "Proposed" },
        { "proposalName": "Bata02", "clients": "Bata", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Bata03", "clients": "Bata", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Bata04", "clients": "Bata", "lastUpdate": "03/10/2017", "status": "Proposed" },
        { "proposalName": "Bata05", "clients": "Bata", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Bata06", "clients": "Bata", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Puma01", "clients": "Puma", "lastUpdate": "03/10/2017", "status": "Proposed" },
        { "proposalName": "Puma02", "clients": "Puma", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Puma03", "clients": "Puma", "lastUpdate": "03/10/2017", "status": "Proposed" },
        { "proposalName": "Puma04", "clients": "Puma", "lastUpdate": "03/10/2017", "status": "In Progress" },
        { "proposalName": "Reebok-Ray", "clients": "Reebok", "lastUpdate": "27/09/2017", "status": "Proposed" },
        { "proposalName": "Neebok-Ray", "clients": "Neebok", "lastUpdate": "26/09/2017", "status": "In Progress" },
        { "proposalName": "Camro-care", "clients": "Camro", "lastUpdate": "04/10/2017", "status": "In Progress" },
        { "proposalName": "Umbro-Up", "clients": "Umbro", "lastUpdate": "25/08/2017", "status": "Proposed" }
    ]
    //display th data in table format
var a = "<tr><td>" +
    activityLog[0].proposalName + "</td><td> " + activityLog[0].clients + "</td><td> " + activityLog[0].lastUpdate + "</td><td> " + activityLog[0].status + "</td></tr>";
var tableHeading = "<thead><tr><th>" + "Proposal Name" + "</th><th>" + "Clients" + "</th><th>" + "Last Updated" + "</th><th>" + "Status" + "</th></tr></thead>";
document.getElementById("demo").innerHTML = tableHeading;
console.log(tableHeading);
var a = " ";

for (i = 0; i < activityLog.length; i++) {
    a += "<tr>" + "<td>" + activityLog[i].proposalName + "</td><td> " + activityLog[i].clients + "</td><td> " + activityLog[i].lastUpdate + "</td><td> " + activityLog[i].status + "</td>" + "</tr>";
    document.getElementById("demo").innerHTML = a;
}

//display Count of Proposed Proposals...
var proposedFinal = 0;
for (var i = 0; i < activityLog.length; i++) {
    var proposedCount = activityLog[i].status;

    console.log(find);
    if (proposedCount === "Proposed") {
        proposedFinal++;
    }
}
document.getElementById('displayProposedItems').innerHTML = proposedFinal;
//display count of In Progress Proposals...

var progressFinal = 0;
for (var i = 0; i < activityLog.length; i++) {
    var progressCount = activityLog[i].status;

    console.log(find);
    if (progressCount === "In Progress") {
        progressFinal++;
    }
}
document.getElementById('displayInProgressItems').innerHTML = progressFinal;

//Scrolling of window function..
var align = document.getElementById('demo');
var right = align.offsetTop;
console.log(right);

function scrollToTable() {
    window.scrollBy(0, right);
}

// var el = document.querySelector('div');

// // get scroll position in px
// console.log(el.scrollLeft, el.scrollTop);
// el.scrollLeft = 500;
// el.scrollTop = 1000;
// console.log(el.scrollLeft, el.scrollTop);
// console.log(el);
// var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// document.documentElement.scrollTop = document.body.scrollTop = 1000;
// document.documentElement.scrollLeft = document.body.scrollLeft = 500;
// console.log(el.scrollLeft, el.scrollTop);


// var b = activityLog.sort(function tableSorting(obj1, obj2) {
//     // Ascending: first age less than the previous
//     return obj1.proposalName - obj2.proposalName;
//     document.getElementById("demo").innerHTML = b;
// });
// console.log(b);

//Sorting Table

// function sortTable(n) {
//     var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//     table = document.getElementById("myTable");
//     switching = true;
//     //Set the sorting direction to ascending:
//     dir = "asc";
//     /*Make a loop that will continue until
//     no switching has been done:*/
//     while (switching) {
//         //start by saying: no switching is done:
//         switching = false;
//         rows = table.getElementsByTagName("TR");
//         /*Loop through all table rows (except the
//         first, which contains table headers):*/
//         for (i = 1; i < (rows.length - 1); i++) {
//             //start by saying there should be no switching:
//             shouldSwitch = false;
//             /*Get the two elements you want to compare,
//             one from current row and one from the next:*/
//             x = rows[i].getElementsByTagName("TD")[n];
//             y = rows[i + 1].getElementsByTagName("TD")[n];
//             /*check if the two rows should switch place,
//             based on the direction, asc or desc:*/
//             if (dir == "asc") {
//                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//                     //if so, mark as a switch and break the loop:
//                     shouldSwitch = true;
//                     break;
//                 }
//             } else if (dir == "desc") {
//                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//                     //if so, mark as a switch and break the loop:
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//         }
//         if (shouldSwitch) {
//             /*If a switch has been marked, make the switch
//             and mark that a switch has been done:*/
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//             //Each time a switch is done, increase this count by 1:
//             switchcount++;
//         } else {
//             /*If no switching has been done AND the direction is "asc",
//             set the direction to "desc" and run the while loop again.*/
//             if (switchcount == 0 && dir == "asc") {
//                 dir = "desc";
//                 switching = true;
//             }
//         }
//     }
// }


//Sorting Table
var c = " ";
//Sorting ProposalName, Clients, Status...
function sortTable(keySort, order) {
    if (keySort === 'proposalName' || 'clients' || 'status') {
        if (order === 'asc') {
            var b = activityLog.sort(function(a, b) {
                var nameA = a[keySort].toLowerCase();
                var nameB = b[keySort].toLowerCase();
                if (nameA < nameB) //sort string ascending
                    return -1
                if (nameA > nameB)
                    return 1
                return 0; //default return value (no sorting)
            })
        } else {
            var b = activityLog.sort(function(a, b) {
                var nameA = a[keySort].toLowerCase();
                var nameB = b[keySort].toLowerCase();
                if (nameA < nameB) //sort string ascending
                    return 1
                if (nameA > nameB)
                    return -1
                return 0; //default return value (no sorting)
            })
        }
    } else {
        if (order === 'asc') {
            var b = activityLog.sort(function(a, b) {
                var nameA = new Date(a[keySort].toLowerCase());
                var nameB = new Date(b[keySort].toLowerCase());
                if (nameA - nameB) //sort string ascending
                    return -1
                if (nameA - nameB)
                    return 1
                return 0; //default return value (no sorting)
            })
        }
        //Sorting Dates...
        else {
            var b = activityLog.sort(function(a, b) {
                var nameA = new Date(a[keySort].toLowerCase());
                var nameB = new Date(b[keySort].toLowerCase());
                if (nameA - nameB) //sort string ascending
                    return 1
                if (nameA - nameB)
                    return -1
                return 0; //default return value (no sorting)
            })
        }

    }

    console.log(b);
    var c = " ";
    for (var i = 0; i < activityLog.length; i++) {
        c += "<tr>" + "<td>" + b[i].proposalName + "</td><td> " + b[i].clients + "</td><td> " + b[i].lastUpdate + "</td><td> " + b[i].status + "</td>" + "</tr>";
        document.getElementById("demo").innerHTML = a;
    }
    document.getElementById("demo").innerHTML = c;
}