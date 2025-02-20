import { ButtonHTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority";
import { tailwindCMerge } from "@/utils";

export const buttonVariants = cva("inline-flex justify-center items-center duration-300 ", {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-primary-hover",
      outline: "bg-transparent text-black dark:text-white border border-gray-300",
      destructive: "bg-red-600 text-black dark:bg-red-800 dark:text-white ",
    },
    size: {
      xs: "px-2 text-xs h-6",
      sm: "px-6 text-sm h-8",
      base: "px-4 text-base h-10",
      lg: "px-6 text-lg h-12",
    },
    fullWidth: {
      true: "w-full ",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "base",
    rounded: "md"
  },
})


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  // className?: string;
}

const Button = ({ children, variant, size, fullWidth, rounded, ...rest }: IProps) => {
  return (
    <button className={`${tailwindCMerge(buttonVariants({ variant, size, fullWidth, rounded }))}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button