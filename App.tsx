import * as React from 'react';
import useFetch from './useFetch';
import useToggle from './useToggle';
import './style.css';

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  const [fetchData, setFetchData] = useFetch(url);
  const [toggle, updateToggle] = useToggle(false);
  const handleRemove = (id) => {
    const temp = fetchData.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      } else {
        return item;
      }
    });
    setFetchData(temp);
  };
  const handleAdd = (id) => {
    const temp = fetchData.map((item) => {
      if (item.id === id) {
        return { ...item, completed: false };
      } else {
        return item;
      }
    });
    setFetchData(temp);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <div
          style={{
            padding: '2rem',
            backgroundColor: 'lightPink',
            maxWidth: '20rem',
            marginRight: '2rem',
          }}
        >
          {Array.isArray(fetchData) && fetchData.length > 0 ? (
            fetchData
              .slice(0, 10)
              .filter((item) => !item.completed)
              .map((item, index) => {
                return (
                  <div
                    style={{
                      padding: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <p
                      style={{
                        marginRight: '0.5rem',
                      }}
                    >
                      {item.title}
                    </p>
                    <button onClick={() => handleRemove(item.id)}>
                      &#10006;
                    </button>
                  </div>
                );
              })
          ) : (
            <p>no items avaiable </p>
          )}
        </div>
      </div>
      <div
        style={{
          padding: '2rem',
          backgroundColor: 'lightGreen',
          maxWidth: '20rem',
        }}
      >
        {Array.isArray(fetchData) &&
          fetchData.length > 0 &&
          fetchData
            .slice(0, 10)
            .filter((item) => item.completed)
            .map((item, index) => {
              return (
                <div
                  style={{
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{
                      marginRight: '0.5rem',
                    }}
                  >
                    {item.title}
                  </p>
                  <button onClick={() => handleAdd(item.id)}>&#10006;</button>
                </div>
              );
            })}
      </div>
    </div>
  );
}
