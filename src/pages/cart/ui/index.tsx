import { useQuery } from "@tanstack/react-query";
import UI from "../../../shared/ui";
import { Divider } from "@nextui-org/react";
interface Item {
  id: number | string;
  img: string;
  price: string;
  name: string;
}

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
      <div className="flex w-full justify-between gap-20">
        <div className="flex flex-col gap-3 flex-1">
          {cart?.map((item: Item) => {
            return (
              <>
                <div className="flex items-center justify-between bg-[#FBFBFB] w-full p-2 gap-5">
                  <div className="w-[170px]">
                    <img className="max-w-full" src={item?.img} alt="Product" />
                  </div>
                  <div className="w-full">{item?.name}</div>
                  <div>{item?.price}</div>
                  <div className="flex justify-start items-center gap-2 mt-3">
                    <UI.Button
                      size="sm"
                      className="bg-[green] rounded-3xl  p-5 text-[#fff]"
                    >
                      -
                    </UI.Button>
                    <UI.Input
                      size="md"
                      color="default"
                      className="w-[50px]"
                      placeholder="0"
                    />
                    <UI.Button
                      size="sm"
                      className="bg-[green] rounded-3xl  p-5 text-[#fff]"
                    >
                      +
                    </UI.Button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex-1">
          <div>Cart Totals</div>
          <Divider />
        </div>
      </div>
    </>
  );
};
export default Cart;
