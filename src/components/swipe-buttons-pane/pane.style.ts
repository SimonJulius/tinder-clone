import styled from "styled-components";

const PaneStyle = styled.div`
  position: fixed;
  bottom: 10vh;
  display: flex;
  width: 100%;
  justify-content: space-between;

  & .MuiIconButton-root {
    background-color: #fff;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3)
  }

  .swipe-buttons-repeat {
    padding: 3vw;
    color: #f5b748;
  }
  .swipe-buttons-left {
    padding: 3vw;
    color: #ec5e6f;
  }
  .swipe-buttons-star {
    padding: 3vw;
    color: #62b6f9;
  }
  .swipe-buttons-right {
    padding: 3vw;
    color: #76e2b3;
  }
  .swipe-buttons-lightning {
    padding: 3vw;
    color: #915dd1;
  }
`;

export default PaneStyle;
