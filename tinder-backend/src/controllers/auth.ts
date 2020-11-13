import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/users";

const signUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    console.log("sign up");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    if (!hash) {
      throw Error("Please register again");
    }

    console.log("Success");

    const user = new User({
      email: email,
      password: hash,
    });
    user.save();
  } catch (err) {
    return err;
  }
};

const login = (req: Request, res: Response, next: NextFunction) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error("User not found"),
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error("Incorrect password"),
            });
          }
          const token = jwt.sign({ userId: user._id }, "SECRET_CODE", {
            expiresIn: "24h",
          });
          res.status(200).json({
            userId: user._id,
            token: token,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: any = (req.headers?.authorization as string).split(" ")[1];
    const decodedToken: { userId: string } = jwt.verify(
      token,
      "SECRET_CODE"
    ) as { userId: string };
    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request"),
    });
  }
};

export default { signUp, login, auth };
