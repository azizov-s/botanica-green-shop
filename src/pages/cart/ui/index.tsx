import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import UI from "../../../shared/ui";
import { Divider } from "@nextui-org/react";
import { Icons } from "../../../shared/assets/icons/icons";
interface Item {
  id: number;
  img: string;
  price: string;
  name: string;
}

const Cart = () => {
  const queryClient = useQueryClient();
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

  const deleteProduct = async (id: number) => {
    const res = await fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  };

  const { mutateAsync: deleteItem } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"] as InvalidateQueryFilters);
    },
  });

  if (isError) return <div>Error while fetching data, please try again</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="flex w-full justify-between gap-20">
        <div className="flex flex-col gap-3">
          {cart?.map((item: Item) => {
            return (
              <>
                <div className="flex items-center justify-between bg-[#FBFBFB] w-full p-2 gap-5">
                  <div className="w-[70px] flex-shrink-0">
                    <img
                      className="h-auto max-w-full"
                      src={item?.img}
                      alt="Product"
                    />
                  </div>
                  <div className="w-full">{item?.name}</div>
                  <div className="w-full">${item?.price}</div>

                  <div className="flex justify-start items-center gap-2 mt-3">
                    <UI.Button
                      size="sm"
                      className="bg-[green] rounded-3xl p-5 text-[#fff]"
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
                      className="bg-[green] rounded-3xl p-5 text-[#fff]"
                    >
                      +
                    </UI.Button>
                    <UI.Button
                      onClick={async () => {
                        await deleteItem(item?.id);
                      }}
                    >
                      <Icons.DeleteIcon />
                    </UI.Button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold">Cart Totals</h1>
          <Divider />
          <p>Coupon Apply</p>
          <div className="flex">
            <UI.Input
              variant="bordered"
              placeholder="Enter coupon code here..."
            />
            <UI.Button className="rounded-l-none bg-[#46A358] text-[#fff]">
              Apply
            </UI.Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
