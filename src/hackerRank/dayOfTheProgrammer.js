//Find the day of the programmer (256th of the year) in Russia
//from 1700 till 2700
//from 1700 to 1917 Russia's callendar was Julian
//from 1917 on it has been Gregorian
//in 1918, the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.
//both callendars have leap years and february has day addition
//leap years in Julian: years divided by 4
//leap yeais in Gregorian: years divided by 400 or by 4 and not by 100
//format must be dd.mm.yyyy
export function findDayOfTheProgrammer(year) {
    const dayOfTheProgrammer = "";
    const notLeapYear = `13.09.${year}`;
    const leapYear = `12.09.${year}`;
    const transitionYear = "26.09.1918";

    function isLeapYear(year, callendar) {
        if (callendar === "julian" && year % 4 === 0) {
            return true;
        }
        if (callendar === "gregorian" && year % 4 === 0) {
            if (year % 100 === 0 && year % 400 !== 0) {
                return false;
            }
            return true;
        }
        return false;
    }

    if (year > 2700 || year < 1700) return "not valid year";

    if (year === 1918) return transitionYear;

    if (year <= 1917) {
        if (isLeapYear(year, "julian")) {
            return leapYear;
        }
        return notLeapYear;
    }
    if (year >= 1919) {
        if (isLeapYear(year, "gregorian")) {
            return leapYear;
        }
        return notLeapYear;
    }

    return dayOfTheProgrammer;
}
