window.onload = loadPage;

function loadPage()
{
    var button = document.getElementById("word_problem_btn");
    button.onclick = buttonClicked;
    
    //loadScript("name_generator.js",null);
}

function buttonClicked()
{
    //alert("Hello world!");
    var txt = document.getElementById("txt");
    if(!txt)
        alert("Could not find txt!");
    txt.innerHTML = generate_word_problem({operation:"*",value1:Math.floor(Math.random()*100),value2:Math.floor(Math.random()*100)});
}