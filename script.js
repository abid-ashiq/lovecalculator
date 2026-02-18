function calculateLove() {

    let name1 = document.getElementById("name1").value.trim().toLowerCase();
    let name2 = document.getElementById("name2").value.trim().toLowerCase();

    let specialNames = [
        "abid", "hani", "mushtaq", "sahana", "tamseel", 
        "adeeba", "deebu", "fazila", "rutba", "rutbah", 
        "fazilah", "tahila", "sanjana", "sultana", "fathima"
    ];

    let percentage;

    if (specialNames.includes(name1) && specialNames.includes(name2)) {
        percentage = 100;
    } else {
        let combined = name1 + name2;
        let loveWord = "love";
        let score = 0;

        for (let letter of loveWord) {
            score += combined.split(letter).length - 1;
        }

        percentage = score * 10;
        if (percentage > 100) percentage = 100;
    }

    let message;
    if (percentage > 80) {
        message = "❤️ Perfect Couple!";
    } else if (percentage > 50) {
        message = "💕 Good Match!";
    } else {
        message = "😅 Just Friends?";
    }

    document.getElementById("result").innerHTML =
        "Love Score: " + percentage + "% <br>" + message;

    // 🔥 SEND DATA TO GOOGLE SHEETS
    fetch("https://script.google.com/macros/s/AKfycbwNURF2gJiDo4scmOf0Mg9PaUVUMkZWbGIZZQn-GLM/dev", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name1: name1,
            name2: name2,
            percentage: percentage
        })
    });
}
