import { useEffect, useState } from "react";

export default function Search() {
  const [data, setData] = useState<any>({
    name: "ram",
    text: "Hii from react",
  });
  const [query, setQuery] = useState<string>("");

  const debounce = (fn: (q: string) => void, delay: number) => {
    let timer: number;

    return function (q: string) {
      clearInterval(timer);
      timer = setTimeout(() => {
        fn(q);
      }, delay);
    };
  };

  const search = async (q: string) => {
    try {
      const res = await fetch(`https://demo.dataverse.org/api/search?q=${q}`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const debounceSearch = debounce(search, 300);

  useEffect(() => {
    debounceSearch(query);
  }, [query]);

  return (
    <div style={{ maxWidth: "400px" }}>
      <form>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          type="text"
          placeholder="Search..."
        ></input>
      </form>
      <div style={{ marginTop: "20px" }}>{JSON.stringify(data)}</div>
    </div>
  );
}
