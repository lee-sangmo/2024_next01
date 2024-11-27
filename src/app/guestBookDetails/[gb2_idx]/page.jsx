import axios from 'axios';
import Detail from '@/app/Detail/page'

async function Page({ params }) {
  const param = await params;
  const gb2_idx = param.gb2_idx;
  console.log("gb2_idx", gb2_idx);
  const API_URL = `http://localhost:8080/api/guestbook/detail?gb2_idx=${gb2_idx}`;
  // const API_URL = `/guestbook/detail?gb2_idx=${gb2_idx}`;

  try {
    const response = await axios.get(API_URL);
    const item = response.data;
    return <Detail item={item} />
  } catch (error) {
    console.error("error : ", error)
    return <div>Error</div>
  }
}

export default Page;