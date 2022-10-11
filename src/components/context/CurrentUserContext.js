import { createContext } from "react";

export const CurrentUserContext = createContext();

// export const CurrentUserContextProvider = ({ children }) => {
//   // const value = {user, signin, signuot}
//   // const value = {
//   //   name: '',
//   //   email: '',
//   //   lastSearch: localStorage.getItem('lastSearch'),
//   //   filterToggle: localStorage.getItem('shortFilm'),
//   // };
// // const value = {}

// // const [currentUser, setCurrentUser] = useState({name: '',
// //     email: '',
// //     lastSearch: localStorage.getItem('lastSearch'),
// //     filterToggle: localStorage.getItem('shortFilm'),})

// return (
//   <CurrentUserContext.Provider value={{name: '', email: ''}}>
//     {children}
//   </CurrentUserContext.Provider>
// );
// };