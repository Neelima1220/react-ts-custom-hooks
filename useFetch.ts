import * as React from 'react';

export default function useFetch(url) {
  const [fetchData, setFetchData] = React.useState(url);

  const fetchingData = async () => {
    const result = await (await fetch(url)).json();
    setFetchData(result);
  };

  React.useEffect(() => {
    fetchingData();
  }, []);

  return [fetchData, setFetchData];
}
