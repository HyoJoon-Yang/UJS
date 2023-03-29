import axios, { AxiosResponse } from "axios";
import React from "react";
import { useState, useEffect } from 'react';

export function useGetData(url: string): any[] {
  const [text, setText] = useState<any[]>([]);
  
  useEffect(() => {
    axios.get(url)
      .then((response: AxiosResponse<any>) => {
        setText([...response.data]);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  
  return text;
}

export function useGetOneData(url: string): JSX.Element | null {
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    axios.get(url)
      .then((response: AxiosResponse<any>) => {
        const item = response.data;
        setItem(item);
      })
      .catch((error) => console.log(error));
  }, [url]);
  
  if (!item) {
    return <div>Loading...</div>;
  }
  
  return item;
}
