const user = {
  name: "Иван",
  lastName: "Иванов",
  email: "1@q.ru",
  id: "1",
  about: "GGOGOF Fof fo",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
};

const users = {
  0: { name: "Valk", lastName: "Gol" },
  1: { name: "Folk", lastName: "Pol" },
  2: { name: "Dalk", lastName: "Molf" },
  3: { name: "Malk", lastName: "Foal" },
  4: { name: "Shalk", lastName: "Laka" },
};

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
