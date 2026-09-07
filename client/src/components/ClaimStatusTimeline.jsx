"use client";

const STEPS = ["Registered", "Verified", "In Repair", "Shipped"];

// Demo-only simulation: since there is no backend tracking real claim
// progress yet, we estimate a stage from how long ago the claim was
// submitted. The claimId is generated as "CLM-<timestamp>", so we can
// read the submission time straight out of it.
function getSubmittedAt(claimId) {
  if (!claimId) return null;
  const match = claimId.match(/(\d{10,})/);
  if (!match) return null;
  const timestamp = Number(match[1]);
  const date = new Date(timestamp);
  return isNaN(date.getTime()) ? null : date;
}

function getCurrentStepIndex(submittedAt) {
  if (!submittedAt) return 0;

  const hoursElapsed = (Date.now() - submittedAt.getTime()) / (1000 * 60 * 60);

  if (hoursElapsed < 24) return 0; // Registered
  if (hoursElapsed < 72) return 1; // Verified
  if (hoursElapsed < 144) return 2; // In Repair
  return 3; // Shipped
}

export default function ClaimStatusTimeline({ claimId }) {
  const submittedAt = getSubmittedAt(claimId);
  const currentStep = getCurrentStepIndex(submittedAt);

  return (
    <div className="claim-timeline-card">
      <span className="claim-timeline-heading">Claim Status</span>

      <div className="claim-timeline">
        {STEPS.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div className="claim-timeline-step" key={step}>
              <div className="claim-timeline-marker-row">
                <div
                  className={`claim-timeline-marker ${
                    isCompleted
                      ? "claim-timeline-marker-done"
                      : isActive
                      ? "claim-timeline-marker-active"
                      : ""
                  }`}
                >
                  {isCompleted ? "✓" : index + 1}
                </div>

                {index < STEPS.length - 1 && (
                  <div
                    className={`claim-timeline-connector ${
                      isCompleted ? "claim-timeline-connector-done" : ""
                    }`}
                  />
                )}
              </div>

              <span
                className={`claim-timeline-label ${
                  isActive ? "claim-timeline-label-active" : ""
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>

      <p className="claim-timeline-note">
        {currentStep === STEPS.length - 1
          ? "Your device has been shipped back to you."
          : "We'll update this as your claim moves through each stage."}
      </p>
    </div>
  );
}
