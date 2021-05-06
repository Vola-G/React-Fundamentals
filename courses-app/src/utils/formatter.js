export function formatTime(time) {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
}

export function formatDate() {
    let currentDate = new Date();
    return currentDate.toLocaleDateString('ru-RU');
}
