function Top() {
    var page = document.getElementById("mainHead");
    page.scrollTop = 100;
}

function Dosignup() {
    location.replace("https://slack.com/oauth/authorize?client_id=39189849459.249480535796&scope=commands,bot,users%2Eprofile%3Aread,im%3Aread,chat%3Awrite%3Abot,team%3Aread")
}