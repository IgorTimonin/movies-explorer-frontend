export function moviesFilter(arr, query, isShortFilm) {
  let resultList = arr.filter(
    (el) => el.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  if (isShortFilm) {
    resultList = resultList.filter((el) => el.duration <= 40);
  }
  return resultList;
}

export function timeToHour(time) {
  const hours = Math.floor(time / 60);
  let minutes = Math.floor(time % 60);
  const newTime = `${hours === 0 ? '' : `${hours}ч`} ${minutes < 10 ? '0' : ''}${minutes}мин`;
  return newTime;
}