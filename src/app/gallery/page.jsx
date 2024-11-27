import Image from 'next/image';
import img01 from "/public/images/coffee-blue.jpg"
import img02 from "/public/file.svg"
import img03 from "/public/images/tree-3.jpg"
import './gallery.css'

function Page(props) {
  return (
    <div>
      <table>
        <tr>
          <td><Image src={img01} width={100} height={100} /></td>
          <td><Image src={img02} width={100} height={100} /></td>
          <td><Image src={img03} width={100} height={100} /></td>
        </tr>
        <tr>
          <td><Image src="/images/tree-4.jpg" width={100} height={100} /></td>
          <td><Image src="/images/tree-1.jpg" width={100} height={100} /></td>
          <td><Image src="/images/tree-2.jpg" width={100} height={100} /></td>
        </tr>
      </table>
    </div>
  );
}

export default Page;