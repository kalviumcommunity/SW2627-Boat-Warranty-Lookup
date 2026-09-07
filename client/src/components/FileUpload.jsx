"use client";

import { useState } from "react";

function FileUpload() {
  const [file, setFile] =
    useState(null);

  function handleChange(event) {
    const selectedFile =
      event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert(
        "File size must be less than 5 MB."
      );

      return;
    }

    setFile(selectedFile);
  }

  return (
    <div className="file-upload">

      <label>
        Upload Invoice
      </label>

      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        onChange={handleChange}
      />

      {file && (
        <p className="muted">
          Selected: {file.name}
        </p>
      )}

    </div>
  );
}

export default FileUpload;