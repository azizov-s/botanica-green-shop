import { Input, extendVariants } from "@nextui-org/react";

const GInput = extendVariants(Input, {
  variants: {
    variant: {
      bordered: {
        inputWrapper:
          "border-[#46A358] rounded-r-none focus-within:!border-green hover:!border-green",
      },
      flat: {
        inputWrapper: "rounded-r-none hover:!bg-[#fff] focus-within:!bg-[#fff]",
      },
    },
    color: {
      default: {
        inputWrapper:
          "bg-[#fff] hover:!border-r-transparent focus-within:!border-r-transparent",
        input: "text-center",
      },
      primary: {
        inputWrapper: "bg-[#fff] text-[black]",
      },
      simple: {
        inputWrapper:
          "bg-[#fff] text-[black] border-r-transparent focus-within:!border-r-transparent hover:!border-r-transparent",
      },
    },
  },
});

export default GInput;
