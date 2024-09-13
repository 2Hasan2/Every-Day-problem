function countingSundays(firstYear, lastYear) {
    let sundays = 0;
    let day = 1;
    for (let year = 1900; year <= lastYear; year++) {
      for (let month = 1; month <= 12; month++) {
        if (year >= firstYear && day === 0) {
          sundays++;
        }
        if (month === 2) {
          if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            day += 29;
          } else {
            day += 28;
          }
        } else if ([4, 6, 9, 11].includes(month)) {
          day += 30;
        } else {
          day += 31;
        }
        day %= 7;
      }
    }
    return sundays;
  }
  
  console.log(countingSundays(1943, 1946));
