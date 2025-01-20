import React from "react";
import {
  BoxV2,
  BoxV3,
  ThemeProviderV2,
  ThemeProvider,
  sprinkles as css,
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
            <h2>Welcome to Razzle</h2>
          </div>
          <p className="Home-intro">
            To get started, edit <code>src/App.js</code> or{" "}
            <code>src/Home.js</code> and save to reload.
          </p>
          <BoxV2 color="secondary">Box with styling props from Neon 🥳</BoxV2>
          <div className={styles}>Styling function from Neon 🎉</div>
          {/* <BoxV3></BoxV3>
          <Box /> */}
          <ul className="Home-resources">
            <li>
              <a href="https://github.com/jaredpalmer/razzle">Docs</a>
            </li>
            <li>
              <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
            </li>
            <li>
              <a href="https://palmer.chat">Community Slack</a>
            </li>
          </ul>
        </div>
      </ThemeProviderV2>
    );
  }
}

export default Home;
