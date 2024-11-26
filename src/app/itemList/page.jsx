"use client";
import { useEffect, useState } from "react";
import "./itemList.css";
import axios from "axios";
import { Divider, Grid2 } from "@mui/material";

export default function Page(props) {
  const [list, setList] = useState([]);
  const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    axios
      .get(API_URL)
      .then((res) => {
        setList(res.data); // 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("에러 발생:", error); // 에러 처리
      });
  };

  // 처음 랜더링 끝난 후 최초 한번만 실행
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <h2>BEST PRODUCTS</h2>
      <Divider />
      <Grid2 container spacing={2}>
        {list.map((k) => {
          return (
            <Grid2 item size={{xs : 3}}>
              <img src={k.image_link} alt="" className="img_item" />
              <strong>{k.name}</strong>
              <span className="text_info">
                {k.category} &nbsp; &nbsp; {k.product_type}
              </span>
              <strong className="num_price">{k.price}</strong>
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}
