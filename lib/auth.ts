import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "default_jwt_secret";

export function signToken(payload: object, expiresIn: string = "7d") {
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}
