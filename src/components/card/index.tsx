import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "../../axios";

import CardStyle from "./card.style";

interface Idata {
  id: string;
  name: string;
  imgUrl: string;
}
type People = [Idata];
const Card = () => {
  const [people, setPeople] = useState<People>([
    { id: "1", name: "John", imgUrl: "" },
  ]);

  useEffect(() => {
    const fetchPeople = async () => {
      const req = await axios.get("/card");
      console.log(req.data);
      setPeople(req.data);
    };

    fetchPeople();
  }, []);
  console.log(people);
  const swiped = (direction: string, nameToDelete: string) => {
    console.log("removing " + nameToDelete);
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen");
  };

  return (
    <CardStyle>
      <div className="tinder-card">
        {people.map((person, index) => {
          return (
            <TinderCard
              className="swipe"
              key={person.id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                className="card"
                style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </CardStyle>
  );
};

export default Card;
