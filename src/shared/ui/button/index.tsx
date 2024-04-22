// import { memo } from 'react'

// interface buttonProps {
// 	text: string,
// 	width: string,
// 	height: string
// }

// const Button = ({text, width, height}:buttonProps) => {
// 	return <button className='bg-greenButton p-3'>{text}</button>
// }

// export default memo(Button)

import { extendVariants, Button } from "@nextui-org/react";
import { memo } from "react";

const ZButton = extendVariants(Button, {
  variants: {
    color: {
      primary: "text-[#fff] bg-[#46A358]",
      outlined:
        "text-[#46A358] border-[#46A358] border-solid border-1 bg-transparent",
      violet: "bg-[#8b5cf6] text-[#fff]",
      default:
        "text-[#46A358] border-transparent border-solid border-1 bg-inherit",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed border-transparent opacity-[.3]",
    },
    size: {
      //   xs: "px-2  h-8 text-tiny gap-1 rounded-small",
      //   md: "px-4  h-9 text-small gap-2 rounded-small",
      //   xl: "px-8  h-[40px] h-10  gap-4 rounded-small",
      xs: "px-2 py h-8 text-tiny gap-1 font-medium rounded-md",
      md: "px-4 py-1.6 text-[14px] rounded-md font-medium leading-5",
      xl: "px-8 py  text gap-4 font-semibold rounded-small",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: "primary",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});

export default memo(ZButton);
