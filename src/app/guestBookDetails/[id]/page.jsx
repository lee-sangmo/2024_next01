"use client";
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './guestBookDetails.css';
import { useEffect, useState } from 'react';

function Page({ params }) {
  const LOCAL_API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
  const [item, setItem] = useState(null);       // 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null);     // 에러 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)  // 로딩 시작

        // params 언래핑: Promise로 감싸진 값을 꺼내는 과정
        // Promise.resolve(params)의 역할
        // Promise.resolve()는 전달된 값을 Promise 객체로 변환합니다.
        // 만약 params가 이미 Promise라면, 원래 Promise를 반환합니다.
        // 만약 params가 일반 객체라면, 이를 즉시 해결된(resolved) Promise로 감쌉니다.
        // Promise인지 아닌지 신경 쓰지 않고 항상 비동기적으로 다룰 수 있습니다.
        // const resolvedParams = await Promise.resolve(params); // params 언래핑
        // const { id } = resolvedParams; // id 추출

        const { id } = await Promise.resolve(params);
        const API_URL = `${LOCAL_API_BASE_URL}/guestbook/detail?gb2_idx=${id}`;

        // 데이터 가져오기
        const response = await axios.get(API_URL);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching product data", error);
        setError("Failed to fetch product data.");
      } finally {
        setLoading(false);    // 로딩 종료
      }
    };
    fetchData();
  }, [params, LOCAL_API_BASE_URL]);

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

  // 로딩 완료 후
  return (
    <>
      <h2 className="title">GuestBook Detail</h2>
      <TableContainer className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-header">ID</TableCell>
              <TableCell className="table-header">이름</TableCell>
              <TableCell className="table-header">제목</TableCell>
              <TableCell className="table-header">내용</TableCell>
              <TableCell className="table-header">이메일</TableCell>
              <TableCell className="table-header">등록일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="table-cell">{item.gb2_idx}</TableCell>
              <TableCell className="table-cell">{item.gb2_name}</TableCell>
              <TableCell className="table-cell">{item.gb2_subject}</TableCell>
              <TableCell className="table-cell">{item.gb2_content}</TableCell>
              <TableCell className="table-cell">{item.gb2_email}</TableCell>
              <TableCell className="table-cell">{item.gb2_regdate.substring(0,10)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default Page;