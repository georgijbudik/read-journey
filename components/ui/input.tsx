import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface IInputProps {
  touchedFields: any;
  errors: any;
  register: any;
  heading: string;
  type: string;
  placeholder: string;
  inputType?: string;
  padding: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Input = ({
  touchedFields,
  errors,
  register,
  type,
  placeholder,
  heading,
  inputType = "text",
  padding,
  disabled = false,
  children,
}: IInputProps) => {
  return (
    <div>
      <div className="relative">
        <input
          disabled={disabled}
          type={inputType}
          placeholder={placeholder}
          className={cn(
            `w-full h-full py-[14px] md:py-4 ${padding} text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0`,
            disabled && "text-primary/60",
            touchedFields[type]
              ? errors[type]
                ? "border border-accent-red"
                : "border border-accent-green"
              : ""
          )}
          {...register(type)}
        />

        {children}

        {touchedFields[type] ? (
          errors[type] ? (
            <AlertCircle
              className={cn(
                "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                touchedFields[type]
                  ? errors[type]
                    ? "block stroke-accent-red"
                    : "hidden"
                  : ""
              )}
              size={18}
            />
          ) : (
            <CheckCircle2
              className={cn(
                "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                touchedFields[type]
                  ? errors[type]
                    ? "hidden"
                    : "block stroke-accent-green"
                  : ""
              )}
              size={18}
            />
          )
        ) : null}

        <p className="text-xs md:text-sm text-secondary absolute top-[50%] translate-y-[-50%] left-[14px] inline-block">
          {heading}:{" "}
        </p>
      </div>

      {errors[type] && touchedFields[type] ? (
        <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
          {errors[type].message}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
