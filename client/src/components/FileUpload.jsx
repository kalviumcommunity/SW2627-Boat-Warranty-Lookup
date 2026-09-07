"use client";

export default function FileUpload({ onFileSelect }) {
  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a JPG, PNG or PDF file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB.");
      return;
    }

    onFileSelect(file);
  };

  return (
    <div className="form-group">
      <label>Purchase Invoice</label>

      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        onChange={handleChange}
      />

      <small>
        Optional · JPG, PNG or PDF · Maximum 5MB
      </small>
    </div>
  );
}