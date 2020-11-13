import express from "express";
const router = express.Router();
import authorizeAuthenticate from "../../controllers/auth";

/* GET users listing. */
router.get("/", (req, res) => {
    res.send("Welcome")
})
router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  authorizeAuthenticate.signUp({ email, password });
  res.send("successfull");
});

router.post("/login", authorizeAuthenticate.login);

router.get("/all", authorizeAuthenticate.auth);

export default router;