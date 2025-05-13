import { createUser } from "../services/auth.service.js";

export const register = async (req, res, next) => {
  console.log("OUTSIDE");
  try {
    console.log("INSIDE");
    const { name, email, picture, status, password } = req.body;
    const newUser = await createUser({
      name,
      email,
      picture,
      status,
      password,
    });

    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
  } catch (error) {}
};

export const logout = async (req, res, next) => {
  try {
  } catch (error) {}
};

export const refreshToken = async (req, res, next) => {
  try {
  } catch (error) {}
};
