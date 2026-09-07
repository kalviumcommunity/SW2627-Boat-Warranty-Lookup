"use client";

function parseDate(value) {
  if (!value) return null;
  const parsed = new Date(value);
  return isNaN(parsed.getTime()) ? null : parsed;
}

function diffInDays(a, b) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  return Math.round((a.getTime() - b.getTime()) / MS_PER_DAY);
}

export default function WarrantyCountdown({ purchaseDate, expiryDate }) {
  const purchase = parseDate(purchaseDate);
  const expiry = parseDate(expiryDate);

  if (!expiry) {
    return null;
  }

  const today = new Date();
  const daysLeft = Math.max(diffInDays(expiry, today), 0);
  const daysOverdue = Math.max(diffInDays(today, expiry), 0);
  const isExpired = diffInDays(expiry, today) <= 0;

  const totalDays = purchase ? diffInDays(expiry, purchase) : null;
  const elapsedPercent =
    totalDays && totalDays > 0
      ? Math.min(
          Math.max(((totalDays - daysLeft) / totalDays) * 100, 0),
          100
        )
      : isExpired
      ? 100
      : 0;

  let tone = "safe";
  if (isExpired) {
    tone = "expired";
  } else if (daysLeft <= 30) {
    tone = "warning";
  }

  const label = isExpired
    ? `Expired ${daysOverdue} day${daysOverdue === 1 ? "" : "s"} ago`
    : `${daysLeft} day${daysLeft === 1 ? "" : "s"} remaining`;

  return (
    <div className={`countdown-card countdown-${tone}`}>
      <div className="countdown-top">
        <span className="countdown-heading">Warranty Countdown</span>
        <span className={`countdown-pill countdown-pill-${tone}`}>
          {label}
        </span>
      </div>

      <div className="countdown-bar">
        <div
          className={`countdown-fill countdown-fill-${tone}`}
          style={{ width: `${isExpired ? 100 : elapsedPercent}%` }}
        />
      </div>

      <div className="countdown-dates">
        <span>{purchase ? purchase.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "Purchase date unavailable"}</span>
        <span>{expiry.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span>
      </div>
    </div>
  );
}
