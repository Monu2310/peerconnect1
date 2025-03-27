import * as React from "react";

export function Card({ children }) {
  return <div className="border p-4">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="font-bold text-lg">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="border-t mt-2 pt-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-gray-500">{children}</p>;
}