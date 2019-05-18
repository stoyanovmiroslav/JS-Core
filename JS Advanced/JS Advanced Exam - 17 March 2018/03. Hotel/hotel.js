class Hotel {
    constructor(name, capacity){
        this.name = name;
        this.capacity = Number(capacity);
        this.bookings = [];
        // wrong !!!!!!!
        this.currentBookingNumber = 1;

        this.roomTypes = {
            single: Math.floor(this.capacity * 0.5),
            maisonette: Math.floor(this.capacity * 0.2),
            double : Math.floor(this.capacity * 0.3) }
    }

    get roomsPricing(){
        return{
            single: 50,
    	    double: 90,
        	maisonette: 135
        }
    }


    get servicesPricing(){
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        }
    }


    rentARoom(clientName, roomType, nights){
        if (this.roomTypes[roomType] >  0) {

            //Firs booking number SERVICESS!!!!
            let booking = {
                clientName ,
                roomType,
                nights,
                currentBookingNumber: this.currentBookingNumber
            };

            this.bookings.push(booking);

            let message = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;

            this.currentBookingNumber++;
            this.roomTypes[roomType]--;
            this.capacity--; //check

            return message;
        }else {
            let message = `No ${roomType} rooms available!`;

            for (let room in this.roomTypes) {
                if (this.roomTypes[room] > 0){
                    message += ` Available ${room} rooms: ${this.roomTypes[room]}.`;
                }

            }

            return message;
        }
    }

    roomService(currentBookingNumber, serviceType){
       let booking =  this.bookings.filter(x => x.currentBookingNumber === currentBookingNumber);
       if (booking.length === 0)
       {
           return `The booking ${currentBookingNumber} is invalid.`;
       }

       if(serviceType !== 'housekeeping' && serviceType !== 'drink' && serviceType !== 'food')
       {
           return `We do not offer ${serviceType} service.`;
       }

       if (booking[0].services){
           booking[0].services.push(serviceType);
       } else{
           booking[0]['services'] = [];
           booking[0].services.push(serviceType);
       }



       return `Mr./Mrs. ${booking[0].clientName}, Your order for ${serviceType} service has been successful.`
    }

    checkOut(currentBookingNumber){
        let booking = this.bookings.filter(x => x.currentBookingNumber === currentBookingNumber);
        if (booking.length === 0)
        {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        booking = booking[0];

        let totalMoney = booking.nights * this.roomsPricing[booking.roomType];

        let servicesPrice = 0;

        if (booking.services)
        {
            booking.services.forEach(x => {
               servicesPrice += this.servicesPricing[x];
            });
        }

        this.roomTypes[booking.roomType]++;
        this.capacity++;

        let message = `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}. The total amount of money you have to pay is ${totalMoney + servicesPrice} BGN.`;

        if (servicesPrice > 0)
        {
            message = `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}. The total amount of money you have to pay is ${totalMoney + servicesPrice} BGN. You have used additional room services, costing ${servicesPrice} BGN.`
        }

       //this.bookings = this.bookings.filter(x => x.currentBookingNumber !== currentBookingNumber);

        return message;
    }

    report(){
        let message = `${this.name.toUpperCase()} DATABASE:\n`;


        this.bookings.forEach(x => {
            message += `---------------------\n`;
            message += `bookingNumber - ${x.currentBookingNumber}\n`;
            message += `clientName - ${x.clientName}\n`;
            message += `roomType - ${x.roomType}\n`;
            message += `nights - ${x.nights}\n`;

            if (x.services){
                let servicesTosting = x.services.join(', ');
                message += `services - ${servicesTosting}\n`;
            }
        });

        if (this.bookings.length === 0)
        {
            message += `--------------------\n`;
            message += 'There are currently no bookings.';
        }

        return message;
    }
}

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

console.log(hotel.report());

