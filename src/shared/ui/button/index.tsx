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

import {extendVariants, Button} from "@nextui-org/react";

const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      olive: "text-[#fff] bg-[#46A358]",
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2  h-8 text-tiny gap-1 rounded-small",
      md: "px-4  h-9 text-small gap-2 rounded-small",
      xl: "px-8  h-[40px] h-10 text-large gap-4 rounded-small",
    },
  },
  defaultVariants: { // <- modify/add default variants
    color: "olive",
    size: "xl",
  },
  compoundVariants: [ // <- modify/add compound variants
    {
      isDisabled: true,
      color: "olive",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});

export default MyButton