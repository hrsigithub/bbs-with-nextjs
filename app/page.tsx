import BBSCardList from "./components/BBSCardList";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData = await res.json();
  console.log(bbsAllData);

  return (
    <main>
      <BBSCardList />
    </main>
  );
}
