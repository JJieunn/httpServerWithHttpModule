const users = [
  {
    id: 1,
    name: "jcode hi",
    email: "hello@gmail.com",
    password: "justcode!",
  },
  {
    id: 2,
    name: "haha code",
    email: "coding@gmail.com",
    password: "just!",
  },
  {
    id: 3,
    name: "hiCode welcome",
    email: "welcome@gmail.com",
    password: "do!",
  },
];

// users
const createUser = (req, res) => {
  const user = req.body.userData;

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  console.log("after : ", users);
  res.json({ message: "userCreated" });
};

module.exports = { createUser };
