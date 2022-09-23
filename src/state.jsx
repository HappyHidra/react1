const user = {
  name: "Иван",
  lastName: "Иванов",
  email: "1@q.ru",
  id: "100",
  about: "GGOGOF Fof fo",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
};

// const users = {
//   0: { name: "Valk", lastName: "Gol", id: 11 },
//   1: { name: "Folk", lastName: "Pol", id: 12 },
//   2: { name: "Dalk", lastName: "Molf", id: 14 },
//   3: { name: "Malk", lastName: "Foal", id: 4 },
//   4: { name: "Shalk", lastName: "Laka", id: 5 },
// };
const users = {};
export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("http://senior.p-host.in/getUsers");
  let users = await response.json();
  console.log(users);
  return users;
}
