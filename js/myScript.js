// jQuery(function($) {
//     $('#search').click(function() {
//         $('#search_input').toggleClass('search-input-open');
//     });
//     $(document).click(function(e) {
//         if (!$(e.target).closest('.form').length && $(e.target).attr('id') !== 'search') {
//             $('#search_input').removeClass('search-input-open');
//         }
//     })
// });

// jQuery(function($) {
//     $('#alert').click(function() {
//         console.log('alert-bell');
//         console.log($('#alertzone').length);
//         $('#alertzone').toggleClass('alert-zone-open');
//     });
//     $(document).click(function(e) {
//         if (!$(e.target).closest('.alert-zone').length && $(e.target).attr('id') !== 'alert') {
//             $('#alertzone').removeClass('alert-zone-open');
//         }
//     })
// })

// function myFunction() {
//     document.getElementById("search").classList.toggle("search-input-open");
// }


// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {

//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// function openSearch(e) {
//     document.getElementById("search_input").style.display = 'inline-block';

// }

// function openNotification() {
//     document.getElementById("alertzone").style.display = 'inline-block';
// }

// window.onclick = function closesearch() {
//         document.getElementById("search_input").style.visibility = 'hidden';
//     }
// document.getElementById("myCheck").onclick = function(event) {
//     if (!event.target.matches('.search-input')) {
//         document.getElementById("search_input").style.visibility = 'hidden';
//     }
// }
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
//Notification Span...
document.getElementById("alert").addEventListener("click", toggleNotification);

function toggleNotification(e) {
    e.stopPropagation();
    document.getElementById("alertzone").classList.toggle("alert-zone-open");

}
document.addEventListener("click", closeNotification);

function closeNotification(event) {
    if (!event.target.matches('.alert-zone')) {
        document.getElementById("alertzone").classList.remove("alert-zone-open");
    }
}

// function openNotification() {
//     document.getElementById("alertzone").classList.toggle("alert-zone-open");
//     document.getElementById("alert").addEventListener("click", removeListener);
//     console.log('in');
// }


// // document.getElementById("myCheck").removeEventListener("click", closeNotification);

// // function closeNotification() {
// //     document.getElementById("alertzone").classList.remove("alert-zone-open");
// // }
// document.addEventListener("click", removeListener);

// function removeListener(e) {
//     if (!e.target.matches(".alert-zone")) {
//         document.removeEventListener("click", openNotification);
//         //document.getElementById("alertzone").classList.remove("alert-zone-open");
//     }
// }
// // function closeNotification(e) {
// //     if (!e.target.matches("#alertzone")) {
// //         document.getElementById("alertzone").classList.remove("alert-zone-open");

// //     }
// // }