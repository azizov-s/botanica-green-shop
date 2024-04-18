import UI from "../../../shared/ui";

const Shop = () => {
  return (
    <>
      <div className="flex ">
        <UI.Input
          placeholder="Enter coupon code here"
          variant="bordered"
          color="default"
        />
        <UI.Button color="success" className="rounded-none">
          Apply
        </UI.Button>
      </div>
    </>
  );
};

export default Shop;
