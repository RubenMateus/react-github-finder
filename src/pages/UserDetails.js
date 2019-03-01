import React from 'react';

export default function UserDetails({ match }) {
  return (
    <div>
      <h2>User: {match.params.user}</h2>
    </div>
  );
};
