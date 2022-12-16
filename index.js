function toggleHide(x) {
    let id = "dp" + x;
    let list = document.getElementById(id);
    if (list.style.display != "none") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}
    var counter = 1;
    setInterval(function () {
        let  sec = document.getElementById("home");
        document.getElementById('radio' + counter).checked = true;
        sec.style.backgroundImage=`url('login_img-${counter}.jpg')`;
        counter++;
        if (counter > 8) {
            counter = 1;
        }
    }, 5000);