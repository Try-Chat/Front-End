const getTime = () => {
  const time = new Date();
  let hour = time.getHours();
  const minute = time.getMinutes();

  const adjustedTime = (hour: number): string => {
    const adjusted = hour >= 12 ? '오후' : '오전';
    const adjustedHour = (hour > 12 ? hour - 12 : hour === 0 ? 12 : hour)
      .toString()
      .padStart(2, '0');
    const adjustedMinute = minute.toString().padStart(2, '0');
    return adjusted + ' ' + adjustedHour + ':' + adjustedMinute;
  };
  const transmissionTime = adjustedTime(hour);

  return transmissionTime;
};

export default getTime;
