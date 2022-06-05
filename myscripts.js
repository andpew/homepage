let switcher = false
let counter = 0;
let audio = new Audio()
audio.src = "https://github.com/andpew/homepage/raw/fc080a63fe37563a403378c6887ed0b24bcc5eae/assets/test.wav"
audio.volume = 0.25


function darkModeSwitch() 
{
    document.getElementsByClassName("intro_text bold")[0].innerText = "Can't touch this"
    counter++
    if(switcher)
    {
        switcher = false
        document.body.className = document.body.className.replace("darkMode","")
        document.getElementsByClassName("resume")[0].className = "resume darkBoxShadow"
        document.getElementById("smile").innerText= "😎"
    }
    else
    {
        switcher = true
        document.body.className = document.body.className.replace("","darkMode")
        document.getElementsByClassName("resume")[0].className = "resume"
        document.getElementById("smile").innerText = "😳"
    }
    if(counter % 4 == 0)
    {
        document.getElementsByClassName("intro_text bold")[0].innerText = "Enought"
        document.getElementById("smile").innerText = "😭"
    }
    else if(counter % 9 == 0)
    {
        document.getElementsByClassName("intro_text bold")[0].innerText = "Are you sane?"
        document.getElementById("smile").innerText = "🤓"
    }
}

function playAudio()
{
    audio.play()
}