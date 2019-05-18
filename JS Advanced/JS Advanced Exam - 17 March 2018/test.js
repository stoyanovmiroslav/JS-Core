let roomType = {
    single: Math.floor(this.capacity * 0.5),
    maisonette: Math.floor(this.capacity * 0.2),
    double : Math.floor(this.capacity * 0.3) };

for (let room in roomType) {
    console.log(` Available ${room} rooms: ${roomType[room]}.`);;
}