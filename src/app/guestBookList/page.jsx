"use client";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import './guestBookList.css';

function Page(props) {
  const LOCAL_API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
  const [list, setList] = useState([]);   // 배열을 받기 때문에 []
  // const API_URL = "http://localhost:8080/api/guestbook/list";
  const API_URL = `${LOCAL_API_BASE_URL}/guestbook/list`;
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null);     // 에러 상태

  const getData = async () => {
    try {
      setLoading(true)  // 로딩 시작
      const response = await axios.get(API_URL);
      setList(response.data.slice(0, 12));
    } catch (error) {
      console.error("Error fetching product data", error);
      setError("Failed to fetch product data.");
    } finally {
      setLoading(false);    // 로딩 종료
    }
  };

  // 처음 랜더링 끝난 후 최초 한번만 실행
  useEffect(() => {
    getData();
  }, []);

  // 로딩 중
  if (loading) {
    return <div style={{ textAlign: "center", padding: "20px" }}><strong>Loading...</strong></div>;
  }
  // 에러 발생 시
  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
        <h2>Error:</h2>
        <p>{error}</p>
      </div>
    );
  }
  
  return (
    <>
      <h2 className="title">GuestBook List</h2>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-header">이름</TableCell>
              <TableCell className="table-header">제목</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item) => (
              <TableRow key={item.gb2_idx}>
                <TableCell className="table-cell">{item.gb2_name}</TableCell>
                <TableCell className="table-cell">
                  <Link href={`/guestBookDetails/${item.gb2_idx}`}>{item.gb2_subject}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Page;