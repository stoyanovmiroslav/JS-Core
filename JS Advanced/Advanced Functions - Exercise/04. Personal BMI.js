function solve(name, age, weight, height) {
    let heightInMeters = height / 100.0;

    let bmi = Math.round(weight / Math.pow(heightInMeters, 2));
    let status = '';

    if (bmi < 18.5){
        status = 'underweight';
    }else if(bmi < 25){
        status = 'normal';
    }else if(bmi < 30){
        status = 'overweight';
    }else if(bmi >= 30){
        status = 'obese';
    }

    let patientData = {
        name: name,
        personalInfo: {
        age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status
    };

    if( status === 'obese'){
        patientData['recommendation'] = 'admission required';
    }

    return patientData;
}

solve('Peter', 29, 75, 182);
solve('Honey Boo Boo', 9, 57, 137);