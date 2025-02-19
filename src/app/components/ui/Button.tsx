import { ButtonHTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("rounded-md font-semibold block duration-200 ", {
  variants: {
    intent: {
      primary: "bg-black text-white dark:bg-white dark:text-black",
      outline: "bg-transparent text-black dark:text-white border border-gray-300",
      destructive: "bg-red-600 text-black dark:bg-red-800 dark:text-white border border-gray-300",
    }
  },
  defaultVariants: {
    intent: "primary",
  },
})


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, intent, ...rest } : IProps) => {
  return (
    <button className={`${className}  ${buttonVariants({intent: intent})} px-3 py-3 ` }{...rest}>
      {children}
    </button>
  )
}

export default Button