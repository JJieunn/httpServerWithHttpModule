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

const posts = [
  {
    id: 1,
    title: "백엔드 API 공부 시작",
    content: "Node.js에 Express 프레임워크 사용",
    userId: 1,
  },
  {
    id: 2,
    title: "백엔드 재밌어 보이는데..",
    content: "어렵다 어려워..",
    userId: 1,
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

  res.json({ message: "userCreated" });
};

// posts
const createPost = (req, res) => {
  const post = req.body.postData;

  posts.push({
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId,
  });

  res.json({ message: "postCreated" });
};

module.exports = { createUser, createPost };
