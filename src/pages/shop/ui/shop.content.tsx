import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

interface Plant {
  id: string | number;
  name: string;
  img: string;
  price: string;
}

const getPlants = async () => {
  try {
    const res = await fetch("http://localhost:3000/plants");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Fetched data");
  }
};

const Shop = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["plants"],
    queryFn: () => getPlants(),
  });

  if (isError) return <div>Error while fetching data</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div
        // className="w-full grid grid-cols-auto-fill gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "10px",
          width: "100%",
        }}
      >
        {data?.map((plant: Plant) => {
          return (
            <div className="flex flex-col" key={plant?.id}>
              <div
                className="border-large h-[250px] flex justify-center"
                onClick={() => {
                  navigate(`${plant?.id}`);
                }}
              >
                <img
                  src={plant?.img}
                  alt="Plant"
                  className="max-w-full h-full object-cover"
                />
              </div>
              <p>{plant?.name}</p>
              <p className="text-[green]">${plant?.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
