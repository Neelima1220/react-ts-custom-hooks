import * as React from 'react';

export default function useToggle(param) {
  const [toggle, setToggle] = React.useState(param);

  const updateToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, updateToggle];
}
