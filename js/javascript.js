function Top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function Dosignup() {
    location.href = "https://slack.com/oauth/authorize?client_id=39189849459.249480535796&scope=commands,bot,users%2Eprofile%3Aread,im%3Aread,chat%3Awrite%3Abot,team%3Aread";
}

function scrollToHeader() {
    var newElement = document.getElementById();
    if (newElement == "mainHead") {
        newElement.scrollIntoView();
    } else if (newElement == "About") {
        newElement.scrollIntoView();
    } else if (newElement == "Features") {
        newElement.scrollIntoView();
    }
}