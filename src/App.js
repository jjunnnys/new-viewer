import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=e4116cb619b94614a1916adb70cf89e5',
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly
        ></textarea>
      )}
    </div>
  );
};

export default App;
