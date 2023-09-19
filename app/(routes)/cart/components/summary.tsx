"use client";
import Button from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import ReactWhatsapp from "react-whatsapp";
const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const productos = items.map(
    (item, idx) => `${idx + 1}_${item.name}. Precio: $${item.price}`
  );
  const sellMesagge = `${productos} || Precio Total:  $${totalPrice}`;
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Pago Confirmado");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Algo salio mal.");
    }
  }, [searchParams, removeAll]);
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Resumen del pedido</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">TOTAL</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="w-full mt-6 bg-green-500">
        <ReactWhatsapp
          number="+54 2613607756"
          message={sellMesagge}
          element="button"
        >
          Pedir por Whatsapp
        </ReactWhatsapp>
      </Button>
    </div>
  );
};

export default Summary;
