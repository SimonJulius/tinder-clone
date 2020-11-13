import express from "express";
import { createCard, getAllCards } from "../../controllers/card_controllers";
const router = express.Router();

router.get("/card", async (req, res) => {
  try {
    const cards = await getAllCards();
    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/card", async (req, res) => {
  try {
    const { name, imgUrl } = req.body;
    const cardInput = await createCard(name, imgUrl);
    res.status(201).send(cardInput);
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
