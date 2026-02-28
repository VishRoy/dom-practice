export function format(name: string, number: number): string {
  const suffix = getOrdinalSuffix(number);
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}


function getOrdinalSuffix(n: number) : string{
    const lastTwoDigits = n % 100;

    if(lastTwoDigits >=11 && lastTwoDigits <=13){
      return 'th'
    }

    const lastDigit = n % 10;

    switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
