// import { IRegisterValues } from "@/app/(auth)/register/_components/registration-form";
// import { cn } from "@/lib/utils";
// import { Path, UseFormRegister } from "react-hook-form";

// type InputProps = {
//   register: UseFormRegister<IRegisterValues>;
//   name: Path<IRegisterValues>;
//   touchedFields: any;
//   error: any;
// };

// const Input = ({ register, name, touchedFields, error }: InputProps) => {
//   return (
//     <div className="relative mb-2">
//       <input
//         className={cn(
//           "w-full h-full py-[14px] md:py-4 pl-[49px] text-primary text-xs relative rounded-xl bg-muted outline-0",
//           touchedFields[name]
//             ? error[name]
//               ? "border border-accent-red"
//               : "border border-accent-green"
//             : ""
//         )}
//         {...register(name)}
//       />
//       <p className="text-xs md:text-sm text-secondary absolute top-[14px] left-[14px] inline-block">
//         {name}:{" "}
//       </p>
//       {error?.[name] && touchedFields[name] ? (
//         <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
//           {error[name].message}
//         </p>
//       ) : null}
//     </div>
//   );
// };

// export default Input;
