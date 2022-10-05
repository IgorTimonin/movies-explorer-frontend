import { movieApiPath } from "../components/constants/constants";

export default function MoviesApi() {
  const result = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  return fetch(movieApiPath).then(result);
}

// export default async function MoviesApi() {
//   const response = await fetch(movieApiPath);
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data;
// };
