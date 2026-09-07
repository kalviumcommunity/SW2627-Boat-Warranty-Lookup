import ServiceBookingForm from "@/components/ServiceBookingForm";

export default function RepairPage() {
  return (
    <main className="page repair-page">
      <section className="container">

        <div className="page-heading">
          <span className="hero-label">
            OUT OF WARRANTY
          </span>

          <h1 className="page-title">
            Repair Your Device
          </h1>

          <p className="page-subtitle">
            Tell us what's wrong with your device. We'll
            analyze the issue and provide an estimated
            repair cost and service time.
          </p>
        </div>

        <ServiceBookingForm />

      </section>
    </main>
  );
}