let choose=document.querySelector("#choose")
let club=document.querySelector("#club")
let rider=document.querySelector("#rider")
let media=document.querySelector("#media")
let company=document.querySelector("#company")
let emaill=document.getElementById("emaill")
let passl=document.getElementById("passl")






choose.addEventListener("change",(e) =>{
    x =e.target.value;
    switch (x) {
        
        case( "club"):
            club.style.display ="block";
            rider.style.display ="none";
            media.style.display ="none";
            company.style.display ="none"
            break
        case( "rider"):
            club.style.display ="none";
            rider.style.display ="block";
            media.style.display ="none";
            company.style.display ="none"
            break
        case( "media"):
            club.style.display ="none";
            rider.style.display ="none";
            media.style.display ="block";
            company.style.display ="none";
            break
        case( "company"):
            club.style.display ="none";
            rider.style.display ="none";
            media.style.display ="none";
            company.style.display ="block";
            break
        default:
            club.style.display ="none";
            rider.style.display ="none";
            media.style.display ="none";
            company.style.display ="none";
            
        
    }
})

