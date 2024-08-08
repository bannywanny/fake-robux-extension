function update() {
    let topRobux = document.getElementById("nav-robux-amount");
    if (topRobux) {
        topRobux.textContent = "460K+";
    }

    let robux = document.getElementsByClassName("text-robux");
    if (robux.length > 1) {
        robux[1].textContent = "460,286";
    }
}

update();

function attemptUpdate() {
    update();
    if (!document.getElementById("nav-robux-amount") || document.getElementsByClassName("text-robux").length === 0) {
        setTimeout(attemptUpdate, 20);
    }
}

attemptUpdate();
