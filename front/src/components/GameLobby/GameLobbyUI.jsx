import React, { useState } from "react";
import "./GameLobbyUI.css";
const GameLobbyUI = ({ playNarratorSound, isMouseInsidePortal }) => {
  const [isOverlayDone, setIsOverlayDone] = useState(false);
  return (
    <>
      <div className="game-lobby-ui-container center">WEBCUP SHOOTER</div>
      {isMouseInsidePortal && <div className="play-button center">PLAY</div>}
      {!isOverlayDone && (
        <div className="google-sound-restriction-overlay center">
          <button
            onClick={() => {
              setIsOverlayDone(true);
              playNarratorSound();
            }}
            className="enter-lobby-button"
          >
            ENTER
          </button>
        </div>
      )}
    </>
  );
};

export default GameLobbyUI;
