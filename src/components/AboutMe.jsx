export default function DescriptionBox({ File }) {
  return (
    <section className="">
      <h1 className="text-2xl font-bold">{File.title}</h1>
      <img> </img>
      <p className="my-4">{File.description}</p>
    </section>
  );
}
