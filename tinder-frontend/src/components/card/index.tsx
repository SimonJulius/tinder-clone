import React, { useState } from "src/components/card/node_modules/react";
import TinderCard from "src/components/card/node_modules/react-tinder-card";

import CardStyle from "./card.style";

const Card = () => {
  const [people, setPeople] = useState([
    {
      name: "Ransome Ahanmisi",
      url:
        "https://scontent-los2-1.xx.fbcdn.net/v/t1.0-9/25994808_1732947573417492_7054343763874416817_n.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=R0mzc3ltP3oAX-WoFd8&_nc_ht=scontent-los2-1.xx&oh=408663767a7184622e348413af7ad58b&oe=5FCDCDCA",
    },
    {
      name: "Oyinkansola Alabi",
      url:
        "https://scontent-los2-1.xx.fbcdn.net/v/t1.0-9/119935128_10224455555798870_6927842842862852703_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=EE98UnQ6JRcAX9uEFnh&_nc_ht=scontent-los2-1.xx&oh=7a73c746e42182a40af4cb1343bf8708&oe=5FCE8B15",
    },

    {
      name: "Deborah Adegoke",
      url:
        "https://scontent-los2-1.xx.fbcdn.net/v/t1.0-9/121785597_138914491273393_6476679444524269522_n.jpg?_nc_cat=110&cb=846ca55b-ee17756f&ccb=2&_nc_sid=09cbfe&_nc_ohc=m0k2NW8kXhEAX-FE-xT&_nc_ht=scontent-los2-1.xx&oh=080cb1c0eca1b067f8ac2d85276e3a68&oe=5FCDC223",
    },
  ]);

  const headers = people.map(person =>{
      
  })

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
         return( <TinderCard
            className="swipe"
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: "url(" + person.url + ")" }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
         )
        })}
      </div>
    </CardStyle>
  );
};

export default Card;
