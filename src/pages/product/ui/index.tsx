import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();

  const getProduct = async (id: string | undefined) => {
    try {
      const res = await fetch(`http://localhost:3000/plants/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Product fetched");
    }
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["plants", id],
    queryFn: async () => await getProduct(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error while fetching product</div>;

  return (
    <>
      <div className="w-full flex justify-between gap-10">
        <div key={data?.id} className="flex-1 flex justify-center">
          <img
            className="max-w-full h-full object-cover"
            src={data?.img}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2>{data?.name}</h2>
          <p className="text-[green]">{data?.price}</p>
          <p>Short description:</p>
        </div>
      </div>
    </>
  );
};

export default Product;
