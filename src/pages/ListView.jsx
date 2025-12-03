import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";
import projects from "../constants/aboutMe.json";
import QuickCard from "../components/QuickLinkCard";
// Assuming you have a projects.json file
function ListView() {
  const [selected, setSelected] = useState(null);

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
        link2={selected?.Demo}
        live={selected?.live}
        onClose={() => setSelected(null)}
        about={selected?.about}
        like={selected?.like}
      />
    </div>
  );
}

export default ListView;
