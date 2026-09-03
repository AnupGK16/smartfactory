import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./ProductQuality.css";

function ProductQuality() {
  const [productId, setProductId] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const analyzeProduct = () => {
    if (!productId || !file) {
      alert("Please enter Product ID and upload an image.");
      return;
    }

    const predictions = [
      {
        status: "Good",
        color: "green",
        confidence: "98.4%",
        defect: "No Defect",
        recommendation: "Ready for Dispatch",
      },
      {
        status: "Minor Defect",
        color: "orange",
        confidence: "91.3%",
        defect: "Surface Scratch",
        recommendation: "Rework Required",
      },
      {
        status: "Defective",
        color: "red",
        confidence: "97.6%",
        defect: "Crack Detected",
        recommendation: "Reject Product",
      },
    ];

    const random = Math.floor(Math.random() * predictions.length);
    setResult(predictions[random]);
  };

  const handleFile = (e) => {
    const image = e.target.files[0];
    setFile(image);

    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  };

  return (
    <>
      <Sidebar />

      <div className="page">
        <div className="quality-card">

          <h1 className="quality-title">
            📦 Product Quality Inspection
          </h1>

          <div className="form-group">
            <label>Product ID</label>

            <input
              type="text"
              placeholder="Enter Product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Upload Product Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
            />
          </div>

          {preview && (
            <div className="preview">
              <img src={preview} alt="Preview" />
            </div>
          )}

          <button
            className="analyze-btn"
            onClick={analyzeProduct}
          >
            Analyze Product
          </button>

          {result && (
            <div className="result-card">

              <h2>Inspection Result</h2>

              <p>
                <strong>Product ID:</strong> {productId}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span style={{ color: result.color }}>
                  {result.status}
                </span>
              </p>

              <p>
                <strong>Confidence:</strong> {result.confidence}
              </p>

              <p>
                <strong>Defect:</strong> {result.defect}
              </p>

              <p>
                <strong>Recommendation:</strong>{" "}
                {result.recommendation}
              </p>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default ProductQuality;