import { Switch } from "@nextui-org/react";
import { Moon, SearchNormal1, ShoppingCart, Sun1 } from "iconsax-react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Icons } from "../../../../shared/assets/icons/icons";
import useDarkSide from "../../../../shared/hooks/darkmode/useDarkSide";
import UI from "../../../../shared/ui";

const Navbar = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const data = [
    {
      value: "/",
      content: "Home",
    },
    {
      value: "/shop",
      content: "Shop",
      dynamic: `/shop/${id}`,
    },
    {
      value: "/plant-care",
      content: "Plant Care",
    },
    {
      value: "/blogs",
      content: "Blogs",
    },
  ];
  const navigate = useNavigate();
  const { colorTheme, setTheme } = useDarkSide();

  const handleLink = (link: string, dynamic: string | undefined) => {
    console.log(pathname);
    return link === pathname || dynamic === pathname
      ? "font-bold border-[#46A358]"
      : "font-normal border-transparent text-[#3D3D3D]";
  };

  return (
    <div
      className="w-[100%] pt-[50px] min-h-[53px] 
    flex justify-between items-start
		border-b-[0.1px] accent-[#46A35880]
    "
    >
      <div className="flex justify-start items-center gap-[6px]">
        <img src={Icons.logo} alt="" />
        <p className="text-[#46A358] text-[20px] font-bold">GREENSHOP</p>
      </div>
      <div className="max-w-[351px] w-[100%] h-[56px] flex justify-between items-start">
        {data?.map((e) => {
          return (
            <button
              key={e.value}
              className={
                `duration-500 h-[100%] pb-[26px] text-base leading-5 border-b-[3px] ` +
                handleLink(e.value, e.dynamic)
              }
              onClick={() => navigate(e.value)}
            >
              {e.content}
            </button>
          );
        })}
      </div>
      <div className="max-w-[200px] w-[100%] h-[56px] flex justify-between items-start">
        <Switch
          // defaultSelected
          size="lg"
          color="success"
          isSelected={colorTheme !== "light"}
          onValueChange={() => setTheme(colorTheme)}
          startContent={<Sun1 size="18" color="#fff" variant="Bold" />}
          endContent={<Moon size="16" color="#46A358" variant="Bold" />}
        />
        <UI.Button
          isIconOnly
          color="default"
          size="md"
          className="dark:bg-green"
        >
          <SearchNormal1 size="20" color="#3D3D3D" />
        </UI.Button>
        {/* <Badge */}
        {/* size='md' */}
        {/* content='0' */}
        {/* className='bg-green outline-transparent text-white' */}
        {/* > */}
        <UI.Button isIconOnly color="default" className="dark:bg-green">
          <ShoppingCart size="20" color="#3D3D3D" />
        </UI.Button>
        {/* </Badge> */}
      </div>
    </div>
  );
};

export default Navbar;
