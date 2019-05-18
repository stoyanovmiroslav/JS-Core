function solve() {
    let $button = $(".courseFoot").val('signMeUp');
    $button.on('click', calculate);

    function calculate(e) {
        let courses = Array.from(document.querySelectorAll('.courseBody ul li input')).filter(x => x.checked);

        let jsFundamentalsPrice = 170;
        let jsAdvancedPrice = 180;
        let jsApplicationsPrice = 190;
        let jsWebPrice = 490;

        let myCourses = [];

        courses.forEach(x => {
            myCourses.push(x.value);
        });


        if (myCourses.includes('js-fundamentals') && myCourses.includes('js-advanced')){
            jsAdvancedPrice = jsAdvancedPrice * 0.9;
            //10% discount
            console.log('10% discount');
        }

        let totalPrice = getModuleTotalPrice();
        console.log(totalPrice);

        if (myCourses.includes('js-advanced') && myCourses.includes('js-fundamentals') && myCourses.includes('js-applications')){
            //discount - 6% on the module's total price.
            totalPrice = totalPrice * 0.94;
            console.log('discount - 6% on the module\'s total price.');
        }

        if (myCourses.includes('js-advanced') && myCourses.includes('js-fundamentals')
            && myCourses.includes('js-applications') && myCourses.includes('js-web')){
            ///bonus course - 'HTML and CSS
            myCourses.push('HTML and CSS');
        }



        let educationForm = $('input[name=educationForm]:checked').val();;
        if(educationForm === 'online'){
            totalPrice = totalPrice * 0.94;
            //Students also get a discount if their education form is online - 6% on all courses.
        }

        if(myCourses.includes('js-web')){
            totalPrice += jsWebPrice;
        }

        let a = document.querySelector('#myCourses .courseFoot p');
        a.textContent = 'Cost: '  + Math.floor(totalPrice) + '.00 BGN';

        let ul = document.querySelector('#myCourses .courseBody ul');

        myCourses.forEach(x => {
            let li= document.createElement('li');

            if (x === 'js-advanced') {
                li.textContent = 'JS-Advanced';
            }

            if (x === 'js-web') {
                li.textContent = 'JS-Web';
            }

            if (x === 'js-applications') {
                li.textContent = 'JS-Applications';
            }

            if (x === 'js-fundamentals') {
                li.textContent = 'JS-Fundamentals';
            }

            if (x === 'HTML and CSS') {
                li.textContent = 'HTML and CSS';
            }

            ul.appendChild(li);
        });

        function getModuleTotalPrice(){
            let totalPriceModule = 0;
            console.log(myCourses);


            myCourses.forEach(x =>{
                console.log(x);
                if (x === 'js-advanced') {
                    totalPriceModule += jsAdvancedPrice;
                }

                //  if (x === 'js-web') {
                //      totalPriceModule += jsWebPrice;
                //     //  }

                if (x === 'js-applications') {
                    totalPriceModule += jsApplicationsPrice;
                }

                if (x === 'js-fundamentals') {
                    totalPriceModule += jsFundamentalsPrice;
                }
            });

            return totalPriceModule;
        }
    }

}