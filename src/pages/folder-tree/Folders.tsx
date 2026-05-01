import { useState } from "react";

const data = [
  {
    id: 1,
    name: "README.md",
  },
  {
    id: 2,
    name: "Documents",
    children: [
      {
        id: 3,
        name: "Word.doc",
      },
      {
        id: 4,
        name: "Powerpoint.ppt",
      },
    ],
  },
  {
    id: 5,
    name: "Downloads",
    children: [
      {
        id: 6,
        name: "unnamed.txt",
      },
      {
        id: 7,
        name: "Misc",
        children: [
          {
            id: 8,
            name: "foo.txt",
          },
          {
            id: 9,
            name: "bar.txt",
          },
        ],
      },
    ],
  },
];

export default function Folders() {
  const [status, setStatus] = useState(new Map());

  const renderTree = (folderData: typeof data) => {
    return folderData.map((item) => {
      if (item.children) {
        setStatus((status) => {
          return status.set(item.id, false);
        });
        return (
          <div
            onClick={() =>
              setStatus((prev) => {
                const newStatus = new Map(prev);
                newStatus.set(item.id, !prev.get(item.id));
                return newStatus;
              })
            }
            style={{
              height: `${status.get(item.id) ? "auto" : "18px"}`,
              overflow: "hidden",
              paddingLeft: "10px",
            }}
          >
            <div style={{ color: "yellow" }} key={item.id}>
              {item.name}
            </div>
            <div style={{ padding: "0 10px 0 0" }}>
              {renderTree(item.children)}
            </div>
          </div>
        );
      } else if (!item.children) {
        return (
          <div
            style={{
              paddingLeft: "10px",
              color: "green",
              borderLeft: "solid 2px gray",
            }}
            key={item.id}
          >
            {item.name}
          </div>
        );
      }
    });
  };

  return <>{renderTree(data)}</>;
}
