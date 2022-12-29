import {
  AriaAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

interface IButton
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    AriaAttributes {}

const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ className, children, ...props }, ref) => (
    <button {...props} className={twMerge("border p-5", className)} ref={ref}>
      {children}
    </button>
  )
);

Button.displayName = Button.name;

export default Button;
