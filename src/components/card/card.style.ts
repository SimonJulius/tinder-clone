import styled from "styled-components";

const CardStyle = styled.div`
  .card {
    position: relative;
    background-color: #fff;
    padding: 20px;
    width: 600px;
    max-width: 85vw;
    height: 50vh;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    backround-size: cover;
    background-position: center;
  }
  .tinder-card {
    display: flex;
    justify-content: center;
    margin-top: 10vh;
  }
  .swipe {
      position: absolute;
  }
  .card-content {
      height: 100%;
      width: 100%;
  }
h3 {
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: #fff;
}

`;

export default CardStyle;
