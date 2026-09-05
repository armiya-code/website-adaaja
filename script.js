/* =========================
   PESAN RAHASIA
========================= */

const secretButton =
    document.getElementById("secretButton");

const secret =
    document.getElementById("secret");
secretButton.addEventListener(
    "click",
    function () {
        if (
            secret.style.display === "block"
        ) {
            secret.style.display = "none";
            secretButton.innerHTML =  "💌 Jangan di klik...";
        } else {
            secret.style.display = "block";
            secretButton.innerHTML =
                "💙 Tutup pesan";
        }
    }
);

/* =========================
   LOVE BERJATUHAN
========================= */

function createHeart() {
    const heart =
        document.createElement("div");
    heart.classList.add("heart");

    const bentukLove = [
        "💙",
        "♡",
        "♥",
        "💙"
    ];

    heart.innerHTML =
        bentukLove[
            Math.floor(
                Math.random() *
                bentukLove.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 20)
        + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5)
        + "s";

    document
        .querySelector(".hearts")
        .appendChild(heart);

    setTimeout(
        function () {
            heart.remove();
        },
        10000
    );
}

/* LOVE MUNCUL TERUS */
setInterval(
    createHeart,
    700
);

/* LOVE PERTAMA */
for (
    let i = 0;
    i < 10;
    i++
) {
    setTimeout(
        createHeart,
        i * 300
    );
}