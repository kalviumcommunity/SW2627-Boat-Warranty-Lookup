import WarrantyForm from "@/components/WarrantyForm";

export default function WarrantyPage() {
  return (
    <section className="warranty-page">

      <div className="breadcrumb">
        Home <span>›</span> Your Device
      </div>

      <div className="warranty-header">

        <p className="eyebrow">
          WARRANTY
        </p>

        <h1>
          Check your device warranty
        </h1>

        <p>
          Enter your 11-character product serial
          number to check your warranty status
          and remaining coverage.
        </p>

      </div>

      <div className="warranty-container">

        <div className="warranty-card">

          <h2>
            Warranty Lookup
          </h2>

          <p>
            Enter the serial number printed
            on your product.
          </p>

          <WarrantyForm />

        </div>

        <div className="serial-help-card">

          <div>
            <p className="eyebrow">
              NEED HELP?
            </p>

            <h2>
              Where to find your serial number?
            </h2>

            <p>
              Check the product box or the product
              itself. Your serial number will be
              11 characters long.
            </p>
          </div>

          <div className="serial-example">
            <small>Serial No.</small>
            <strong>BOAT1234ABC</strong>
          </div>

        </div>

      </div>

    </section>
  );
}