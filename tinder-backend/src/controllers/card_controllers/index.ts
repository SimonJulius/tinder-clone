import CardDb from "../../models/card_db/carddb";

export const createCard = async (name: string, imgUrl: string) => {
  try {
    const card = await new CardDb({ name, imgUrl });

    card.save();
    return { name, imgUrl };
  } catch (error) {
    throw error;
  }
};

export const getAllCards = async () => {
  try {
    const cards = await CardDb.find();
    return cards;
  } catch (error) {
    throw error;
  }
};
