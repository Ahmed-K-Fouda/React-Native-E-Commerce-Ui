import { OrderStep } from "@/app/(no-tabs)/orders/[id]";

export const orderSteps: OrderStep[] = [
  {
    status: "Delivered",
    date: "27 Feb",
    isCompleted: false,
    isActive: false,
  },
  { status: "Shipped", date: "27 Feb", isCompleted: true, isActive: true },
  {
    status: "Order Confirmed",
    date: "27 Feb",
    isCompleted: true,
    isActive: true,
  },
  {
    status: "Order Placed",
    date: "27 Feb",
    isCompleted: true,
    isActive: true,
  },
];
