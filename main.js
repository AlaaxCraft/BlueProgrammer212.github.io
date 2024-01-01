const ageSpan = document.getElementById("age");
const chessEloSpan = document.getElementById("chess-elo");

const dateNow = new Date();
const birthDate = new Date("2008-08-08 9:00:00");

/**
 * 
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns the year difference between two dates.
 */
function getYearDistance(date1, date2) {
    let diff = date2.getFullYear() - date1.getFullYear();

    if (date2.getMonth() < date1.getMonth() ||
        (date2.getMonth() == date1.getMonth() && date2.getDate() < date1.getDate())) {
        diff--;
    }

    return diff;
}

function getCurrentChessElo(username) {
    fetch(`https://api.chess.com/pub/player/${username}/stats`).then(data => data.json())
        .then(response => {
            chessEloSpan.textContent = response.chess_rapid.last.rating;
        })
}

ageSpan.textContent = getYearDistance(birthDate, dateNow);
chessEloSpan.textContent = getCurrentChessElo("blueprogrammer212");