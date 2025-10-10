import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./index.js";
import { users } from "./users.js";

export function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "Токен отсутствует" });

  jwt.verify(token, SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(403).json({ error: "Не действительный токен" });
    }

    if (!user) {
      return res.status(403).json({ error: "Ненайден юзер" });
    }
    req.user = user;
    next();
  });
}
