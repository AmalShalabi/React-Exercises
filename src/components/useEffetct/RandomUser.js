import React, { useEffect, useState } from "react";

function RandomUser() {
  const url = `https://randomuser.me/api`;
  const [personData, setPersonData] = useState([{}]);

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {typeof personData.results === "undefined" ? (
        <div>
          <p>Data Is Loading...</p>
        </div>
      ) : (
        <div>
          <p>Data has Loaded Successfully !</p>
          <p>
            Name:{personData.results[0].name.first}{" "}
            {personData.results[0].name.first}
          </p>
          <p >Gender:{personData.results[0].gender}</p>
          <p>Age:{personData.results[0].dob.age}</p>
        </div>
      )}
    </div>
  );
}

export default RandomUser;
