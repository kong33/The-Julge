export default function calculateWorkhour(startsAt: string, workhour: number) {
  const startTime = new Date(startsAt);
  const year = startTime.getFullYear();
  const month = startTime.getMonth() + 1;
  const date = startTime.getDate();
  const hours = startTime.getHours();

  const formattedDate = `${year}.${month}.${date}`;
  const endTime = hours + workhour;
  const fromToHour = `${hours}:00~${hours + workhour}:00`;
  return { formattedDate, endTime, fromToHour };
}
