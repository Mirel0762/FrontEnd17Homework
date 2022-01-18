var inputFullName = document.querrySelector("#name");
var inputCountry = document.querrySelector("#country");
var inputMessage = document.querySelector("#Message");
function UserMessage(img,fullName,country,message)
{
    this.img = img;
    this.fullName = fullName;
    this.country = country;
    this.message = message;
    this.showInfo = function()
    {
        return "<img src='"+this.img + "'>"+"<br" + "<h5" + this.fullName + "</h5" + "<small" + this.country + "</small>" + "<p>" + this.message + "</p>"+
        "<button class ='remove-comment'>Remove Comment</button>";
    }
}
var allMsg = document.querySelector(".all-msg");
allMsg.innerHTML=" ";
allMsg.addEventListener('click',removeComment);

var createCommentBtn = document.querySelector("button");
createCommentBtn.addEventListener("click",addComment);

var messages = [];
var output = "";

function showInfo ()
{
    output = output + messages[messages.length - 1].showInfo() + "<br>";
    allMsg.innerHTML = output;
}


function addComment()
{
    var message = new UserMessage ("https://www.clipartmax.com/png/middle/324-3245301_welcome-to-the-department-of-anatomy-avatar-icon-png.png" , inputFullName.value, inputCountry.value, inputMessage.value);
    messages.push(message);
    console.log(messages);
    showInfo();
}

function removeComment(e)
{
    if(e.target.classList.contains("remove-comment")==true)
    {
        console.log(e.target.parentNode)
        e.target.parentNode.remove();
    }
}