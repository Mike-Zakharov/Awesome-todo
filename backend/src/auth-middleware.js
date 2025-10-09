import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./index.js";
import { users } from "./users.js";

export function authMiddleware(req, res, next) {
  console.log("middleware");

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Нет токена" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(403).json({ error: "Не действительный токен" });
    }

    const currentUser = users.find((u) => u.username === user.username);
    if (!currentUser) {
      return res.status(403).json({ error: "Ненайден юзер" });
    }
    req.user = currentUser;
    next();
  });
}
