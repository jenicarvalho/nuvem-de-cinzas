import React, { useState, useEffect } from "react";

export default function Sky() {
  const [clouds, setClouds] = useState({ dayOne: [], dayTwo: [] });

  useEffect(() => {
    fetch("http://localhost:5555/")
      .then(res => res.json())
      .then(response => {
        console.log(response.matrix.dayOne)
        setClouds(response.matrix);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="grid">
        {clouds.dayOne.map(cloud => (
          <div>
            <span>{cloud}</span>
          </div>
        ))}
      </div>

      <div className="grid">
        {clouds.dayTwo.map(cloud => (
          <div>
            <span>{cloud}</span>
          </div>
        ))}
      </div>
    </>
  );
}