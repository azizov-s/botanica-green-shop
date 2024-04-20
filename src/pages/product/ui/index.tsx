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
      <div key={data?.id}>
        <img src={data?.img} alt="" />
        <p>{data?.name}</p>
        <p>${data?.price}</p>
      </div>
    </>
  );
};

export default Product;
