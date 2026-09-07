import { headers } from "next/headers";

import ServiceCenterSearch from "@/components/ServiceCenterSearch";
import ServiceBookingForm from "@/components/ServiceBookingForm";

type Props = {
  searchParams: Promise<{
    serial?: string;
    product?: string;
  }>;
};

export default async function ServicePage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const headerList = await headers();

  const userAgent =
    headerList.get("user-agent") || "";

  const isMobile =
    /mobile/i.test(userAgent);

  return (
    <section className="page">

      <p className="eyebrow">
        SERVICE CENTER
      </p>

      <h1>
        Find a Service Center
      </h1>

      <p className="muted">
        Enter your city to find the nearest
        service center.
      </p>

      <p className="device-note">
        {isMobile
          ? "Mobile support view"
          : "Desktop support view"}
      </p>

      <div className="service-layout">

        <ServiceCenterSearch />

        <ServiceBookingForm
          serial={params.serial || ""}
          product={params.product || ""}
        />

      </div>

    </section>
  );
}