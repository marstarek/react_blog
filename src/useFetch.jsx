import React from 'react';
import { useState, useEffect } from "react";

const useFetch = (url) => {
     const [data, setData] = useState(null);
     const [isloading, setIsloading] = useState(true);
     const [error, setError] = useState(null);
     useEffect(() => {
          setTimeout(() => {
            fetch(url)
              .then((res) => {
                if (!res.ok) {
                  throw Error("could not fetch data !")
                }
                  return res.json();
                })
                .then((data) => {
                  console.log(data);
                  setData(data);
                  setIsloading(false);
                }).catch(err => {
                  setError(err.message)
                  setIsloading(false);
          
                })
          }, 1000);
     }, [url]);
     
     return {data,isloading,error}
}

export default useFetch
// this is custom reuseable Hook to fetch data 