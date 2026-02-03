import { useRef, useEffect } from 'react';

export default function SimulationConsole({ logs }) {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="bg-black border border-slate-800 rounded-lg p-4 font-mono text-xs sm:text-sm h-64 overflow-y-auto shadow-inner shadow-black" ref={scrollRef}>
            {logs.length === 0 && (
                <div className="text-slate-500 italic">Waiting for simulation trigger...</div>
            )}
            {logs.map((log, index) => (
                <div key={index} className="mb-1 leading-relaxed">
                    <span className="text-slate-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    {log.type === 'error' ? (
                        <span className="text-red-500 font-bold">{log.message}</span>
                    ) : log.type === 'warning' ? (
                        <span className="text-yellow-400">{log.message}</span>
                    ) : log.type === 'success' ? (
                        <span className="text-green-500">{log.message}</span>
                    ) : (
                        <span className="text-slate-300">{log.message}</span>
                    )}
                </div>
            ))}
        </div>
    );
}
