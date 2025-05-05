export default function ItemBox() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="col-span-1"> picture </div>
        <div> name</div>
        <div className="absolute"> engine</div>
        <div className="absolute"> task</div>
      </div>
    </>
  );
}
