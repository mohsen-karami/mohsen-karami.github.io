var screen = window.matchMedia("(orientation:portrait)");

var blogCondition = true;
var blog = document.getElementById("blog");
var blogLine = document.getElementById("blogline");
var myBlogLink = document.getElementById("myblog");
var bigBangLink = document.getElementById("bigbang");
var removebookpoint;
var removeblogpoint;
var bookCondition = true;
var book = document.getElementById("book");
var bookLine = document.getElementById("bookline");
var ketabnakLink = document.getElementById("ketabnak");
var ketabrahLink = document.getElementById("ketabrah");

myBlogLink.style.top = "-5vh";
bigBangLink.style.top = "-5vh";
ketabnakLink.style.top = "5vh";
ketabrahLink.style.top = "5vh";
bookLine.style.maxWidth = "0";
blogLine.style.maxWidth = "0";

function rotate() {
    if (screen.matches) {
        blogLine.style.right = "12.5vw";
        blogLine.style.width = "0.025vw";
        bookLine.style.right = "27.5vw";
    bookLine.style.width = "0.06vw";
    } else {
        blogLine.style.right = "3.5vw";
        blogLine.style.width = "0.007vw";
        bookLine.style.right = "10vw";
        bookLine.style.width = "0.02vw";
    }
}

setInterval(rotate, 100);

blog.onclick = function () {
    if (blogCondition === true) {
        clearTimeout(removeblogpoint);
        blogLine.style.maxWidth = "20vw";
        blogLine.style.transition = "transform .3s";
        myBlogLink.style.transition = "transform .3s .15s";
        bigBangLink.style.transition = "transform .3s .3s";
        blogLine.style.transform = "scale(1000, 1)";
        myBlogLink.style.transform = "translate(0, 6vh)";
        bigBangLink.style.transform = "translate(0, 5.5vh)";
        blogCondition = false;
    } else {
        removeblogpoint = setTimeout(function() {blogLine.style.maxWidth = "0"}, 700);
        bigBangLink.style.transition = "transform .3s";
        myBlogLink.style.transition = "transform .3s .15s";
        blogLine.style.transition = "transform .3s .3s";
        bigBangLink.style.transform = "translate(0, 0)";
        myBlogLink.style.transform = "translate(0, 0)";
        blogLine.style.transform = "scale(1, 1)";
        blogCondition = true;
    }
};

book.onclick = function () {
    if (bookCondition === true) {
        clearTimeout(removebookpoint);
        bookLine.style.maxWidth = "55vw";
        bookLine.style.transition = "transform .3s";
        ketabnakLink.style.transition = "transform .3s .15s";
        ketabrahLink.style.transition = "transform .3s .3s";
        bookLine.style.transform = "scale(1000, 1)";
        ketabnakLink.style.transform = "translate(0, -5vh)";
        ketabrahLink.style.transform = "translate(0, -4.5vh)";
        bookCondition = false;
    } else {
        removebookpoint = setTimeout(function() {bookLine.style.maxWidth = "0"}, 800);
        ketabrahLink.style.transition = "transform .3s";
        ketabnakLink.style.transition = "transform .3s .15s";
        bookLine.style.transition = "transform .3s .3s";
        ketabrahLink.style.transform = "translate(0, 0)";
        ketabnakLink.style.transform = "translate(0, 0)";
        bookLine.style.transform = "scale(1, 1)";
        bookCondition = true;
    }
};