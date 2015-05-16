window.onload = loadPage;

function loadPage()
{
    var button = document.getElementById("btn_start");
    button.onclick = buttonClicked;
}

function buttonClicked()
{
    alert("Hello world!");
    var txt = document.getElementById("txt");
    if(!txt)
        alert("Could not find txt!");
    txt.innerHTML = "Hello world!";
}