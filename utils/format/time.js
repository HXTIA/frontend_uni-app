export const timeFormat = (currentTime) => {
  const nowDay = new Date(currentTime)
  const year = nowDay.getFullYear();
  const month = nowDay.getMonth() + 1;
  const day = nowDay.getDate();
  const hours = nowDay.getHours()<10?"0"+(nowDay.getHours()):nowDay.getHours();
  const minutes = nowDay.getMinutes()<10?"0"+(nowDay.getMinutes()):nowDay.getMinutes();
  const format = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day} ${hours}:${minutes}`

  return format;
}
