import React from 'react';
import { Blurhash } from 'react-blurhash';

const Card = ({ restaurant }) => {
  return (
    /* adds different class depenging on online status */
    <div className={`card ${restaurant.online ? 'online' : 'offline'}`}>
      {/* card background canvas */}
      <Blurhash
        className="card-image"
        hash={restaurant.blurhash}
        width={480}
        height={720}
        punch={1}
      />
      {/* card text content */}
      <div className="card-content">
        {/* correct element content and classes depensing on online status */}
        {restaurant.online ? (
          <p className="status online">online</p>
        ) : (
          <p className="status offline">offline</p>
        )}

        <p className="name">{restaurant.name}</p>
      </div>
    </div>
  );
};

export default Card;
