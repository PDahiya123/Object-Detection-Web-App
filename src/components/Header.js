import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          Tensorflow Object Detection webapp on ReactJS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
