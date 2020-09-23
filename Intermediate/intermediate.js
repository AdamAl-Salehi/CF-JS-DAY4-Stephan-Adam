class Hotel {
    hotelName;
    numberOfNights = Math.floor(Math.random() * 11);
    address;
    image;

    constructor(hotelName, address, image) { // ③
       this.hotelName = hotelName;
       this.address = address;
       this.image = image;
   }

    showAvailability() {
        var requiredNights = prompt(`${this.hotelName}: How many nights do you need?`);
        var numberOfNights = this.numberOfNights;
        if (numberOfNights > requiredNights) {
            document.getElementById("reserve").style.display = "block";
        } else {
            document.getElementById("negative").innerHTML = `Sorry, no available nights for ${this.hotelName}`;
        }

    }
}

var Ritz = new Hotel("Ritz", "Boulevard", "bad");
var Hilton = new Hotel("Hilton", "Street", "good");
var Home = new Hotel("Home", "Alley", "best");

Ritz.showAvailability();
Hilton.showAvailability();
Home.showAvailability();