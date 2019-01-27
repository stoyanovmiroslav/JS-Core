function fitnessRates(weekDay, service, hour) {

    let isWorkDay = (weekDay === 'Monday' || weekDay === 'Tuesday' || weekDay === 'Wednesday' ||
        weekDay === 'Thursday' || weekDay === 'Friday');

    let isWeekend = (weekDay === 'Saturday' || weekDay === 'Sunday');

    let firstHours = hour >= 8 && hour <= 15;
    let secondHours = hour >= 15 && hour <= 22;

    let price = 0;

        if (isWorkDay && (firstHours || secondHours)) {
            switch (service) {
                case 'Fitness': price = firstHours ? 5 : 7.50; break;
                case 'Sauna': price = firstHours ? 4 : 6.50; break;
                case 'Instructor': price = firstHours ? 10 : 12.50; break;
            }
        }else if (isWeekend && (firstHours || secondHours)) {
            switch (service) {
                case 'Fitness': price = 8; break;
                case 'Sauna': price = 7; break;
                case 'Instructor': price = 15; break;
            }
        }

        console.log(price)
}

fitnessRates('Monday', 'Sauna', 15.30);