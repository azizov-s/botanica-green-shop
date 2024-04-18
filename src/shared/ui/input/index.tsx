import { Input, extendVariants } from "@nextui-org/react";

const GInput = extendVariants(Input, {
  variants: {
    variant: {
      bordered: {
        inputWrapper:
          "border-[green] focus-within:!border-green hover:!border-green rounded-none",
      },
    },
    color: {
      default: {
        inputWrapper: "bg-[#fff]",
      },
    },
  },
});

export default GInput;
