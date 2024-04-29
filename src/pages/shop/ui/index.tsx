import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

interface Plant {
  id: string | number;
  name: string;
  img: string;
  price: string;
  sku: number;
}

const Shop = () => {
  const navigate = useNavigate();
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

  const { data, isError, isLoading } = useQuery({
    queryKey: ["plants"],
    queryFn: () => getPlants(),
  });

  if (isError) return <div>Error while fetching data</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "10px",
          width: "100%",
          marginTop: "10px",
        }}
      >
        {data?.map((plant: Plant) => {
          return (
            <div className="flex flex-col" key={plant?.id}>
              <div
                className="h-[250px] flex justify-center cursor-pointer hover:shadow-md !shadow-lime-500"
                onClick={() => {
                  navigate(`/shop/${plant?.id}`);
                }}
              >
                <img src={plant?.img} width={"100%"} height={250} alt="Plant" />
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
