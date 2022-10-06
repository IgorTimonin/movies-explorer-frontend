export function moviesFilter(arr, query, isShortFilm) {
  let resultList = arr.filter(
    (el) => el.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  if (isShortFilm) {
    resultList = resultList.filter((el) => el.duration <= 40);
  }
  return resultList;
}

// export function showArray(limit, offcet, arr) {
//   limit += offcet;
//   for (offcet; offcet < limit && offcet < arr.length; offcet++) {
//     += arr[offcet];
//   }
// }
