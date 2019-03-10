function solve(tickets, sortBy) {
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let processedTickets = [];
    tickets.forEach(x => {
        let ticketInfo = x.split('|');
        let ticket = new Ticket(ticketInfo[0], ticketInfo[1], ticketInfo[2]);
        processedTickets.push(ticket);
    });
    
    return processedTickets.sort((a,b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0));
}

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
)