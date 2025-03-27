
// import * as React from "react";
// import { cva } from "tailwind-variants";  
// // import * as tv from "tailwind-variants";
// // const cva = tv.cva;

// //   const buttonVariants = cva(
// //     "inline-flex items-center justify-center rounded-md text-sm font-medium",
// //     {
// //       variants: {
// //         variant: {
// //           default: "bg-primary text-white hover:bg-primary-dark",
// //           outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
// //         },
// //         size: {
// //           sm: "px-3 py-1.5 text-xs",
// //           md: "px-4 py-2 text-sm",
// //           lg: "px-6 py-3 text-base",
// //         },
// //       },
// //       defaultVariants: {
// //         variant: "default",
// //         size: "md",
// //       },
// //     }
// //   );
// const buttonVariants = cva({
//     base: "px-4 py-2 rounded-md",
//     variants: {
//       variant: {
//         primary: "bg-blue-500 text-white",
//         secondary: "bg-gray-500 text-white",
//       },
//     },
//   });
  
//   const Button = React.forwardRef((props, ref) => (
//     <button ref={ref} {...props} />
//   ));
//   Button.displayName = "Button";
//   export { Button };
//   export { cva };
import React from "react";
import { tv } from "tailwind-variants"; // Correct way to import in newer versions

const buttonVariants = tv({
  base: "px-4 py-2 rounded-md font-medium transition-all",
  variants: {
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
    },
    size: {
      sm: "text-sm px-3 py-1",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// Create the Button component
const Button = React.forwardRef(({ variant, size, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`${buttonVariants({ variant, size })} ${className}`}
      {...props}
    />
  );
});

// Set display name for debugging
Button.displayName = "Button";

// Export the Button component
export { Button };