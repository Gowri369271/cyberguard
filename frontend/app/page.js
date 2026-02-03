"use client";
import { useState, useEffect } from "react";
import SimulationConsole from "@/components/SimulationConsole";
import AttackControl from "@/components/AttackControl";
import VulnerabilityReport from "@/components/VulnerabilityReport";
import { Activity, ShieldCheck, Terminal, Server, Globe } from "lucide-react";

export default function Home() {
  const [systemInfo, setSystemInfo] = useState(null);
  const [logs, setLogs] = useState([]);
  const [report, setReport] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/system-info")
      .then((res) => res.json())
      .then((data) => setSystemInfo(data))
      .catch((err) => console.error("Failed to fetch system info", err));
  }, []);

  const handleAttack = async (type) => {
    if (isSimulating) return;
    setIsSimulating(true);
    setLogs([]);
    setReport(null);
    setLogs([{ message: `Initializing ${type.toUpperCase()} simulation sequence...`, delay: 0 }]);

    try {
      const res = await fetch(`http://localhost:5000/api/simulate/${type}`, {
        method: "POST",
      });
      const data = await res.json();

      let currentStepIndex = 0;

      const processNextStep = () => {
        if (currentStepIndex >= data.steps.length) {
          setReport(data.report);
          setIsSimulating(false);
          return;
        }

        const step = data.steps[currentStepIndex];
        // Add log
        setLogs(prev => [...prev, step]);
        currentStepIndex++;
      };

      // Better approach for absolute delays:
      const startTime = Date.now();
      data.steps.forEach((step) => {
        setTimeout(() => {
          setLogs(prev => [...prev, step]);
        }, step.delay);
      });

      // Show report after last step
      const lastDelay = data.steps[data.steps.length - 1].delay;
      setTimeout(() => {
        setReport(data.report);
        setIsSimulating(false);
      }, lastDelay + 500);

    } catch (e) {
      console.error(e);
      setLogs((prev) => [
        ...prev,
        { message: "Simulation failed: Connection refused.", type: "error" },
      ]);
      setIsSimulating(false);
    }
  };

  return (
    <main className="container mx-auto p-6 max-w-6xl">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            CyberGuard <span className="text-slate-400 font-light">Sandbox</span>
          </h1>
          <p className="text-slate-400 mt-1">
            Real-time Vulnerability Simulation
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-500 border border-slate-800 px-3 py-1 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>System Online</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: System Info & Controls */}
        <div className="lg:col-span-1 space-y-6">
          {/* System Fingerprint */}
          <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Server className="w-5 h-5 mr-2 text-cyan-500" />
              System Fingerprint
            </h2>
            {systemInfo ? (
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex justify-between items-center">
                  <span>OS:</span>
                  <select
                    value={systemInfo.os}
                    onChange={(e) => setSystemInfo({ ...systemInfo, os: e.target.value })}
                    className="bg-slate-950 border border-slate-700 rounded text-cyan-400 text-xs p-1 focus:ring-1 focus:ring-cyan-500 outline-none w-40 text-right"
                  >
                    <option value="Linux (Ubuntu 22.04 LTS)">Linux (Ubuntu)</option>
                    <option value="Windows Server 2022">Windows Server 2022</option>
                    <option value="macOS Ventura">macOS Ventura</option>
                  </select>
                </div>
                <div className="flex justify-between items-center">
                  <span>Server:</span>
                  <select
                    value={systemInfo.server}
                    onChange={(e) => setSystemInfo({ ...systemInfo, server: e.target.value })}
                    className="bg-slate-950 border border-slate-700 rounded text-cyan-400 text-xs p-1 focus:ring-1 focus:ring-cyan-500 outline-none w-40 text-right"
                  >
                    <option value="Nginx/1.18.0">Nginx/1.18.0</option>
                    <option value="Apache/2.4.52">Apache/2.4.52</option>
                    <option value="IIS 10.0">IIS 10.0</option>
                  </select>
                </div>
                <div className="flex justify-between items-center">
                  <span>Framework:</span>
                  <select
                    value={systemInfo.framework}
                    onChange={(e) => setSystemInfo({ ...systemInfo, framework: e.target.value })}
                    className="bg-slate-950 border border-slate-700 rounded text-cyan-400 text-xs p-1 focus:ring-1 focus:ring-cyan-500 outline-none w-40 text-right"
                  >
                    <option value="Express.js 4.18.2">Express.js</option>
                    <option value="Django 4.2">Django 4.2</option>
                    <option value="Flask 2.3">Flask 2.3</option>
                    <option value="Next.js 14">Next.js 14</option>
                  </select>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-800">
                  <span>Security Headers:</span>
                  <span className="text-red-400 font-bold">MISSING</span>
                </div>
              </div>
            ) : (
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-slate-800 rounded"></div>
                <div className="h-4 bg-slate-800 rounded"></div>
              </div>
            )}
          </section>

          {/* Attack Controls */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <ShieldCheck className="w-5 h-5 mr-2 text-purple-500" />
              Attack Simulation
            </h2>
            <AttackControl onAttack={handleAttack} disabled={isSimulating} />
          </section>
        </div>

        {/* Right Column: Console & Reports */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-white flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-green-500" />
                Live Execution Logs
              </h2>
              {isSimulating && <span className="text-xs text-green-400 font-mono animate-pulse">EXECUTING...</span>}
            </div>
            <SimulationConsole logs={logs} />
          </section>

          <section>
            <VulnerabilityReport report={report} />
          </section>
        </div>
      </div>
    </main>
  );
}
