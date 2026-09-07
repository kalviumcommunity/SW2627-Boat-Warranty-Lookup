import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">

      <div>

        <div className="footer-logo">
          boAt
        </div>

        <p>
          Technology that keeps you connected,
          entertained and inspired.
        </p>

      </div>

      <div>

        <h4>
          Explore
        </h4>

        <Link href="/products">
          Products
        </Link>

        <Link href="/warranty">
          Your Devices
        </Link>

        <Link href="/help">
          Help Topics
        </Link>

      </div>

      <div>

        <h4>
          Support
        </h4>

        <Link href="/warranty-claim">
          Warranty Claim
        </Link>

        <Link href="/warranty">
          Warranty
        </Link>

        <Link href="/contact">
          Contact Us
        </Link>

      </div>

    </footer>
  );
}

export default Footer;