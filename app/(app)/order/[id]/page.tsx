import React, { useEffect, useRef, useState } from "react";
import {
  IBaseOrder,
  IDoctorResponse,
  IErrorResend,
  IProduction,
} from "./types";
import Processing from "./OrderStates/Processing";
import ErrorResend from "./OrderStates/ErrorResend";
import DoctorResponse from "./OrderStates/DoctorResponse";
import Sending from "./OrderStates/Sending";
import InProduction from "./OrderStates/InProduction";
import Delivered from "./OrderStates/Delivered";
import Loading from "@/components/tools/loading/loading";
import { getOrderDetails } from "./action";

export default async function OrderDetailsPage({
  params,
}: {
  params: { id: number };
}) {
  const orderDetails = (await getOrderDetails(params.id)) as IBaseOrder;
  switch (orderDetails?.state) {
    case "PROCESSING":
      return <Processing data={orderDetails} />;
    case "ERROR_RESEND":
      return <ErrorResend data={orderDetails as IErrorResend} />;
    case "DOCTOR_RESPONSE":
      return <DoctorResponse data={orderDetails as IDoctorResponse} />;
    case "IN_PRODUCTION":
      return <InProduction data={orderDetails as IProduction} />;
    case "SENDING":
      return <Sending data={orderDetails as IProduction} />;
    case "DELIVERED":
      return <Delivered data={orderDetails as IProduction} />;
    default:
      return (
        <div className="w-full flex justify-center">
          <Loading />
        </div>
      );
  }
}
