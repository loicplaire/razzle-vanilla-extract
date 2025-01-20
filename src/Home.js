import React from "react";
import {
  BoxV2,
  BoxV3,
  ThemeProviderV2,
  ThemeProvider,
  css,
} from "@getatomi/neon";

import logo from "./react.svg";
import "./Home.css";

class Home extends React.Component {
  render() {
    // Create styles using styling function from Neon
    const styles = css({
      color: "success",
      padding: { mobile: "lg", tablet: "xl" },
    });

    return (
      <ThemeProviderV2>
        <div className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>Neon + Vanilla Extract + Razzle</h2>
          </div>
          <BoxV2 color="secondary" marginTop="xl">
            Box with styling props from Neon 🥳
          </BoxV2>
          <div className={styles}>Styling function from Neon 🎉</div>
        </div>
      </ThemeProviderV2>
    );
  }
}

export default Home;
