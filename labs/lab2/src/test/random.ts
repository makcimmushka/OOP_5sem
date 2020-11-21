export function randomDate(): Date {
  const randomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  return randomDate(new Date(2017, 0, 1), new Date());
}

export function randomNumber(): number {
  return Math.random() * 10;
}