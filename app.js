const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const { User } = require("./models/User");

app.get("/users", async (req, res) => {
  const users = await User.findAll({});

  return res.status(200).json({
    data: users,
    meta: {
      page: 1,
      per_page: 10,
      totalItems: users.length,
    },
  });
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);

  return res.status(200).json(user);
});

app.post("/users", async (reg, res) => {
  try {
    const user = await User.create(reg.body);
    await user.reload();
    return res.status(201).json({ user });
  } catch (e) {
    return res.json(e);
  }
});

app.patch("/users", async (reg, res) => {
  try {
    const user = await User.findByPk(reg.params.id);
    if (user) {
      user.first_name = reg.body.first_name;
      user.last_name = reg.body.last_name;
    }
    await user.save();
    return res.status(200).json({ user });
  } catch (e) {
    return res.json(e);
  }
});

app.delete("/users", async (reg, res) => {
  try {
    const user = await User.findByPk(reg.params.id);
    await user.destroy();
    return res.status(204).json();
  } catch (e) {
    return res.json(e);
  }
});

app.listen(port, async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });
  } catch (error) {
    console.error(error);
  }
});
