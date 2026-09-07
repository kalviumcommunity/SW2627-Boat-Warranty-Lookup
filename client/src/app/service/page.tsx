import ServiceCenterSearch from "@/components/ServiceCenterSearch";

export default function ServicePage() {
  return (
    <main className="page service-page">

      <section className="container">

        <div className="service-hero">

          <span className="hero-label">
            SERVICE SUPPORT
          </span>

          <h1>
            Find a service center
            <br />
            <span>near you.</span>
          </h1>

          <p>
            Locate an authorized boAt service center and
            get your device professionally serviced.
          </p>

        </div>

        <ServiceCenterSearch />

      </section>

    </main>
  );
}