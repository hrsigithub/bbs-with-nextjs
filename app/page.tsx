import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData: BBSData[] = await res.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData: BBSData[] = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
