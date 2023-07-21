import React from "react";

function JsDataFetch() {
  let allData = [];
  var dataToPass = ["villas", "beach", "resturant"];
  const amentiesShow = (data) => {
    return data.map((item) => {
      async function abc(item) {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${item}.json?access_token=token`
        );
        var data = await response.json();

        allData.push(...data.features);
      }
      abc(item);
    });
  };

  amentiesShow(dataToPass);
  return (
    <div>
      {/* <button onClick={() => amentiesShow(dataToPass)}>hitMe</button> */}
    </div>
  );
}

export default JsDataFetch;
