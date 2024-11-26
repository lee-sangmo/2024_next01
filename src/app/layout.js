import Link from "next/link";

// layout.js는 선택이다 (RootLayout 제외)
// layout이 필요없는 간단한 페이지에서는 생략 가능


// 페이지 전체의 공통구조를 랜더링 할 때 사용

// 부모 컴포넌트
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{textAlign:"center"}}>
        {/* <header style={{marginTop:"50px"}}>공통 헤더</header> */}
        {/* 자식 컴포넌트가 랜더링 된다 */}
        {/* {children} */}
        {/* <footer style={{marginTop:"50px"}}>공통 풋터</footer> */}
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          <li><Link href="/read/1">HTML</Link></li>
          <li><Link href="/read/2">CSS</Link></li>
          <li><Link href="/read/3">JSV</Link></li>
          <li><Link href="/gallery">image</Link></li>
          <li>ItemList(외부서버)</li>
          <li>GuestBook(Spring서버)</li>
        </ol>
        <hr />
        {children}
        <hr />
        <ul>
          {/* /create 이면 create 폴더를 찾는다!! 
          폴더 안에는 page.jsx(필수,자식), layout.jsx(선택,부모) 가 있다 */}
          <li><Link href="/create">Create</Link></li>
          <li>Update</li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  );
}
