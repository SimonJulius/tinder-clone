import React from "src/components/swipe-buttons-pane/node_modules/react";

import ReplayIcon from 'src/components/swipe-buttons-pane/node_modules/@material-ui/icons/Replay';
import CloseIcon from 'src/components/swipe-buttons-pane/node_modules/@material-ui/icons/Close';
import StarRateIcon from 'src/components/swipe-buttons-pane/node_modules/@material-ui/icons/StarRate';
import FavoriteIcon from 'src/components/swipe-buttons-pane/node_modules/@material-ui/icons/Favorite';
import FlashOnIcon from 'src/components/swipe-buttons-pane/node_modules/@material-ui/icons/FlashOn';
import { IconButton } from "src/components/swipe-buttons-pane/node_modules/@material-ui/core";


import PaneStyle from "./pane.style";

const SwipeButtonsPane = () => {
  return (
    <PaneStyle>
      <IconButton className="swipe-buttons-repeat" >
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-left" >
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-star" >
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-right" >
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-lightning" >
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </PaneStyle>
  );
};

export default SwipeButtonsPane;
