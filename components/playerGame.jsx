import React from "react";
import Button from "./button";
import classnames from "classnames";

import PlayerName from "./playerName";
import Card, { CardContext } from "./card";

export default function PlayerGame(props) {
  const {
    game,
    player,
    active,
    self = false,
    onSelectPlayer,
    onNotifyPlayer
  } = props;
  const hand = player.hand || [];

  return (
    <div>
      <div
        className={classnames("f6 f4-l fw2 tracked ttu ml1 flex items-center", {
          fw6: active
        })}
      >
        {active && <span>>&nbsp;</span>}
        <PlayerName player={player} />
        {active && !self && !player.notified && (
          <span className="ml2 pointer" onClick={() => onNotifyPlayer(player)}>
            🔔
          </span>
        )}
      </div>

      <div className="cards dib mt2 mw-100">
        <div className="flex flex-row grow pointer">
          {hand.map((card, i) => (
            <Card
              onClick={() => onSelectPlayer(player, i)}
              key={i}
              card={card}
              position={i}
              hidden={self}
              multicolorOption={game.options.multicolor}
              size="medium"
              context={
                self ? CardContext.SELF_PLAYER : CardContext.OTHER_PLAYER
              }
              className={i < player.hand.length - 1 ? "mr1 mr2-l" : ""}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .cards:hover {
          background-color: var(--color-main);
          box-shadow: 0px 0px 10px 5px var(--color-main);
        }
      `}</style>
    </div>
  );
}
