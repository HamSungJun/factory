import clsx from "clsx";
import {
  AriaAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

interface IRadio
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    AriaAttributes {
  classes?: {
    root?: string;
    ["radio-outer"]?: string;
    ["radio-inner"]?: string;
  };
}

const Radio = forwardRef<HTMLInputElement, IRadio>(
  ({ classes, children, defaultChecked, checked, ...props }, ref) => (
    <label
      className={twMerge("inline-flex items-center", classes?.root)}
      data-testid="Radio.label"
    >
      <div
        className={twMerge(
          "boder-gray-300 mr-[4px] flex h-[14px] w-[14px] items-center justify-center rounded-full border",
          classes?.["radio-outer"]
        )}
        data-testid="Radio.outer"
      >
        <span
          className={twMerge(
            clsx(
              "invisible h-[8px] w-[8px] rounded-full bg-gray-300",
              { visible: defaultChecked || checked },
              classes?.["radio-inner"]
            )
          )}
          data-testid="Radio.inner"
        ></span>
        <input hidden {...props} ref={ref} type="radio" />
      </div>
      {children}
    </label>
  )
);

Radio.displayName = Radio.name;

export default Radio;
