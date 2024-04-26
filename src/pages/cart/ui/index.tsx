import { useQuery } from "@tanstack/react-query";

const Cart = () => {
  const {
    data: cart,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => {
      return fetch("http://localhost:3000/cart").then((res) => res.json());
    },
  });

  if (isError) return <div>Error while fetching data, please try again</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div>
        {cart?.map((item) => {
          return <div key={item?.id}>{item?.name}</div>;
        })}
      </div>
    </>
  );
};
export default Cart;
