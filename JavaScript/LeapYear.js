function Leap_year(Year){
    if (Year % 4 === 0){
        if (Year % 100 === 0) {
            if (Year % 400 === 0){
                return("Leap Year");
            }
            else {
                return("Not a Leap Year");
            }
        }
        else{
            return ("Leap Year");
        }

    }
    else {
        return ("Not a Leap Year");
        }
}

Leap_year(1900);    //Not a Leap Year

