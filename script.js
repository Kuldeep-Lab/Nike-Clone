function animateCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let increment = range / (duration / 10);
    let current = start;
    let timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            clearInterval(timer);
            current = end;
        }
        element.textContent = Math.floor(current) + (id === 'customers' ? 'K+' : '+');
    }, 10);
}

window.onload = function() {
    animateCounter("brands", 0, 1000, 2000);
    animateCounter("shops", 0, 500, 2000);
    animateCounter("customers", 0, 250, 2000);
};