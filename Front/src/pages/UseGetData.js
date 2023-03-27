import axios from "axios";
import {useState,useEffect} from 'react';


export function useGetData(url) {
    const [text, setText] = useState([]);
    axios
    .get(url)
    .then((response) => {
    setText([...response.data]);
    console.log(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });

    return text
}
export function useGetOneData(url) {
    const [item, setItem] = useState(null);
    
    useEffect(() => {
      axios.get(url)
        .then(response => {
          const item = response.data;
          setItem(item);
        })
        .catch(error => console.log(error));
    },);
    
    if (!item) {
      return <div>Loading...</div>;
    }
    
    return item
  }

  