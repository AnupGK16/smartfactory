import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Energy.css";

function Energy() {
  const [machineId, setMachineId] = useState("");
  const [result, setResult] = useState(null);

  const analyzeEnergy = () => {
    if (!machineId) {
      alert("Please enter Machine ID.");
      return;
    }

    const reports = [
      {
        status: "Normal",
        color: "green",
        consumption: "430 kWh",
        efficiency: "91%",
        cost: "₹4,250",
        recommendation: "Energy usage is optimal. Continue monitoring.",
      },
      {
        status: "High Consumption",
        color: "orange",
        consumption: "690 kWh",
        efficiency: "72%",
        cost: "₹7,100",
        recommendation: "Optimize machine usage to reduce energy.",
      },
      {
        status: "Critical",
        color: "red",
        consumption: "910 kWh",
        efficiency: "55%",
        cost: "₹9,850",
        recommendation: "Immediate maintenance recommended.",
      },
    ];

    const random = Math.floor(Math.random() * reports.length);
    setResult(reports[random]);
  };

  return (
    <>
      <Sidebar />

      <div className="page">
        <div className="energy-card">

          <h1 className="energy-title">
            ⚡ Energy Analytics
          </h1>

          <div className="form-group">
            <label>Machine ID</label>

            <input
              type="text"
              placeholder="Enter Machine ID"
              value={machineId}
              onChange={(e) => setMachineId(e.target.value)}
            />
          </div>

          <button
            className="analyze-btn"
            onClick={analyzeEnergy}
          >
            Analyze Energy
          </button>

          {result && (
            <div className="result-card">

              <h2>Energy Report</h2>

              <p>
                <strong>Machine ID:</strong> {machineId}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span style={{ color: result.color }}>
                  {result.status}
                </span>
              </p>

              <p>
                <strong>Consumption:</strong> {result.consumption}
              </p>

              <p>
                <strong>Efficiency:</strong> {result.efficiency}
              </p>

              <p>
                <strong>Estimated Cost:</strong> {result.cost}
              </p>

              <p>
                <strong>Recommendation:</strong> {result.recommendation}
              </p>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Energy;