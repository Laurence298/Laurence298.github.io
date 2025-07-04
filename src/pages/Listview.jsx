import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Card from "./card";
import projects from "../AboutMe.json";
import QuickCard from "../components/QuickLinkCard";
// Assuming you have a projects.json file
function ListView() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.projects) {
          setItems(data.projects);
        }
      })
      .catch((err) => {
        console.error("Failed to load projects JSON:", err);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid sm:grid-cols-1 gap-6">
        {projects.projects.map((item) =>
          item.quickView ? (
            <QuickCard
              title={item.title}
              description={item.description}
              url={item?.Link}
              category={item.category}
            />
          ) : (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              onClick={() => setSelected(item)}
              category={item.category}
            />
          )
        )}
      </div>

      <Modal
        isOpen={!!selected}
        title={selected?.title}
        description={selected?.description}
        details={selected?.details}
        technologies={selected?.technologies}
        github={selected?.Link}
        live={selected?.live}
        onClose={() => setSelected(null)}
        about={selected?.about}
        like={selected?.like}
      />
    </div>
  );
}

export default ListView;
