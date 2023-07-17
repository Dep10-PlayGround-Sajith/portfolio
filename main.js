
let tablinks =document.getElementsByClassName("tab-links");
let tabcontents =document.getElementsByClassName("tab-contents");
let sidemenu = document.getElementById("sidemenu");
let btnSubmit = document.getElementById("submit-btn");


function opentab(tabname){
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for ( tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
function openMenu(){
    sidemenu.style.right="0"
}
function closeMenu(){
    sidemenu.style.right="-200px"
}

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz51TLcAx2fW85_wqTohS_pYkSPC0oy2YDYPwVQObKv8Xg9u4LD04jsu9yxBuarcc8PBg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg =document.getElementById("msg");

    form.addEventListener('submit', e => {
        btnSubmit.innerText="Sending..."
        btnSubmit.disabled=true;
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            btnSubmit.disabled=false;
            btnSubmit.innerText="Submit";
            setTimeout(()=>{
                msg.innerHTML=""
            },5000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message)
            msg.innerHTML = "something went wrong please try again!";
            btnSubmit.disabled=false;
            btnSubmit.innerText="Submit";
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000);
        });
    });