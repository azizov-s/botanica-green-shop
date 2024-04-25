import { Divider } from "@nextui-org/react";
import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import UI from "../../../shared/ui";
import { HeartIcon } from "../../../shared/assets/icons/HeartIcon";

const sizes = ["S", "M", "L", "XL"];
interface Product {
  img: string;
  name: string;
  price: string;
}

const Product = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(0);
  const queryClient = useQueryClient();

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

  const addProduct = async (product: Product) => {
    const obj = {
      img: product?.img,
      price: product?.price,
      name: product?.name,
    };
    const res = await fetch("http://localhost:3000/cart", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("mutation", data);
    return data;
  };

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: () => {
      return fetch("http://localhost:3000/cart").then((res) => res.json());
    },
  });

  console.log("CartData", cart);

  const { mutateAsync } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"] as InvalidateQueryFilters);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error while fetching product</div>;

  return (
    <>
      <div className="w-full flex justify-between gap-10 mt-10 items-center">
        <div key={data?.id} className="flex-1">
          <img className="m-w-[100%] h-[300px]" src={data?.img} alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="font-bold">{data?.name}</h2>
          <p className="text-[green]">{data?.price}</p>
          <Divider />
          <p className="font-medium">Short description:</p>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.{" "}
          </p>
          <p className="font-medium">Size:</p>
          <div className="flex gap-3">
            {sizes?.map((size, i) => {
              return (
                <div
                  onClick={() => setSelectedItem(i)}
                  className={`cursor-pointer flex justify-center items-center p-3 w-[30px] h-[30px]  ${selectedItem === i ? "text-[green] border-1 border-green rounded-2xl" : "text-[black] border-1 border-black rounded-2xl"} `}
                >
                  {size}
                </div>
              );
            })}
          </div>
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
            <UI.Button className="bg-[green] text-[#fff]">Buy now</UI.Button>
            <UI.Button
              className="bg-[#fff] text-[black] border-1 border-[green]"
              onClick={async () => {
                await mutateAsync(data);
              }}
            >
              Add to cart
            </UI.Button>
            <UI.Button className="bg-[#fff] border-1 border-[green]">
              <HeartIcon />
            </UI.Button>
          </div>
          <div>
            <p>SKU:</p>
            <p>Categories:</p>
            <p>Tags:</p>
            <p>Share this products: </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
