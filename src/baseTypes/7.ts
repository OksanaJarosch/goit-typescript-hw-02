/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}

function isWeekend(day: Weekday): boolean {
    if (day === Weekday.saturday || day === Weekday.sunday) {
    return true;
  } else {
    return false;
  }
}


console.log(isWeekend(Weekday.sunday));
console.log(isWeekend(Weekday.monday));