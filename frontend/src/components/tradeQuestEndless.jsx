import NavBar from "./navBar";
import React, {useState} from 'react';
import TradeQuestEndlessBreadCrumbs from "./tradeQuestEndlessBreadCrumbs";
import "../component-css/tradeQuestEndless.css";

function TradeQuestEndless() {
    return (
      <div id="tradeQuestEndless">
        <NavBar></NavBar>
        <h1>TradeQuest: Endless</h1>
        <TradeQuestEndlessBreadCrumbs></TradeQuestEndlessBreadCrumbs>
        <div id="tradeQuestEndlessImg">
            <img src = "Resources/TradeQuest screen.png" class="endlessImg"></img>
            <img src = "Resources/decision.png" class="endlessImg2"></img>
        </div>
        <img src="Resources/statistic.png" class="endlessImg3"></img>
        <div id="tradeQuestEndlessLine">
            <p>"Rest assured, your virtual game financial records remain separate from your real-life ones."</p>
        </div>
      </div>
    );
  }
  
  export default TradeQuestEndless;