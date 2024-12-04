"use client"

import { TextField, Button } from "@mui/material";
import useAuthStore from "../../../store/authStore";
import axios from "axios";
import { useState } from "react";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

export default function Page() {
  const LOCAL_API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
  const { isAuthenticated, token } = useAuthStore();
  const router = useRouter();
  const [formData, setFormData] = useState({
    gb2_name: "",
    gb2_subject: "",
    gb2_content: "",
    gb2_email: "",
    gb2_pw: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }));
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev, file: e.target.files[0]
    }));
  };

  // 저장은 post 방식, FormData를 쓴다
  // async await 가 비동기 처리가 가능하다
  const handleSubmit = async () => {
    const API_URL = `${LOCAL_API_BASE_URL}/guestbook/write`;
    const data = new FormData();
    data.append("gb2_name", formData.gb2_name);
    data.append("gb2_subject", formData.gb2_subject);
    data.append("gb2_content", formData.gb2_content);
    data.append("gb2_email", formData.gb2_email);
    data.append("gb2_pw", formData.gb2_pwd);
    // data.append("file", formData.file);
    if (formData.file) {
      data.append("file", formData.file);
    }
    try {
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,

        },
      });
      if (response.data.useState) {
        alert(response.data.message);
        router.push("/guestbookList");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 로그인 상태이고, 빈칸이 없으면 저장 버튼 활성화
  const isFormValid =
    isAuthenticated &&
    formData.gb2_name.trim() !== "" &&
    formData.gb2_subject.trim() !== "" &&
    formData.gb2_pw.trim() !== "" &&
    formData.gb2_content.trim() !== "" &&
    formData.gb2_email.trim() !== "";

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>GuestBookWrite</h2>
      <TextField
        label="NAME"
        name="gb2_name"
        value={formData.gb2_name}
        onChange={handleChange}
        fullWidth
        margin="dense" />
      <TextField
        label="SUBJECT"
        name="gb2_subject"
        value={formData.gb2_subject}
        onChange={handleChange}
        fullWidth
        margin="dense" />

      <SimpleMDE
        value={formData.gb2_content}
        onChange={(value) => setFormData({
          ...formData, gb2_content: value
        })}
      />

      <TextField
        label="PASSWORD"
        name="gb2_pw"
        value={formData.gb2_pw}
        onChange={handleChange}
        fullWidth
        margin="dense" />
      <TextField
        label="EMAIL"
        name="gb2_email"
        value={formData.gb2_email}
        onChange={handleChange}
        fullWidth
        margin="dense" />

      <input type="file" name="file" onChange={handleFileChange} />
      <Button variant="contained" color="success" onClick={handleSubmit} style={{ marginTop: "20px" }} disabled={!isFormValid}>저장</Button>
    </div>
  )
}