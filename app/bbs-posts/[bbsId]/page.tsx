import { BBSData } from "@/app/types/types";
import Link from "next/link";

async function getDetailBBSData(id: number) {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store", // SSR
  });

  const BBSDetialData: BBSData = await res.json();

  return BBSDetialData;
}

// bbsIdはフォルダ[bbsId] と名前を合わせる必要がある。
const BBSDetialPage = async ({ params }: { params: { bbsId: number } }) => {
  const { bbsId } = await params; // params.bbsId を await で解決
  const bbsDetialData: BBSData = await getDetailBBSData(bbsId);
  const { title, content, username } = bbsDetialData;

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-700">{username}</p>
      </div>
      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>

      <Link
        href={"/"}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
      >
        戻る
      </Link>
    </div>
  );
};

export default BBSDetialPage;
