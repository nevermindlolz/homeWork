let car = {
    марка: 'nisan',
    модель: 'minivan',
    год: 1999,
}

function getInfo() {
    console.log(this.марка + this.модель + this.год);
}

car.getInfo()