import { useState } from "react";
import { useEffect } from "react";
function App() {
  const url = "http://34.44.230.107:8082/user/get";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data), setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

  return (
    <>
      <div>
        {data
          ? data.map((item) => (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
              </div>
            ))
          : "Loading..."}
      </div>
    </>
  );
}

export default App;
