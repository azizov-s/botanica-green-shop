import UI from "../../../shared/ui";

const Shop = () => {
  return (
    <>
      <div className="flex ">
        <UI.Input
          placeholder="enter your email address"
          variant="flat"
          color="simple"
        />
        <UI.Button color="success" className="rounded-l-none">
          Join
        </UI.Button>
      </div>
    </>
  );
};

export default Shop;
