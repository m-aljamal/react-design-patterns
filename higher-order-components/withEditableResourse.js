//  make the withEditable component mode genrall

import React from "react";

import { useEffect, useState } from "react";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const withEditableResourse = (Compnent, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
      async () => {
        const res = await axios.get(resourcePath);
        setOriginalData(res.data);
        setData(res.data);
      };
    }, []);
    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };
    // save user in backend

    const onSave = async () => {
      const res = await axios.post(resourcePath, {
        [resourceName]: data,
      });
      setOriginalData(res.data);
      setData(res.data);
    };
    // to back to original user if not want to change
    const onReset = () => {
      setData(originalData);
    };
    // this object is for nameing the props data => user, onChange => onChangeUser
    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };
    return <Compnent {...props} {...resourceProps} />;
  };
};

export default withEditableResourse;
