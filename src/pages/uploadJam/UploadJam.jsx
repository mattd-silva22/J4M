function UploadJam() {
  const data = {
    name: "Jam de teste",
  };
  return (
    <div className="flex flex-col align-middle justify-center w-full gap-10">
      <h2 className="flex font-orbitron text-3xl w-full justify-center items-center text-pink">
        {data.name}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4">
        Upload
      </div>
    </div>
  );
}

export default UploadJam;
