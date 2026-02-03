import { Bug, ShieldAlert, Database, CloudLightning } from 'lucide-react';

const attacks = [
    { id: 'sqli', name: 'SQL Injection', icon: Database, color: 'text-blue-400', border: 'border-blue-500/30 hover:border-blue-500' },
    { id: 'dos', name: 'Denial of Service', icon: CloudLightning, color: 'text-orange-400', border: 'border-orange-500/30 hover:border-orange-500' },
    { id: 'malware', name: 'Malware Payload', icon: Bug, color: 'text-purple-400', border: 'border-purple-500/30 hover:border-purple-500' },
    { id: 'virus', name: 'Virus Propagation', icon: ShieldAlert, color: 'text-red-400', border: 'border-red-500/30 hover:border-red-500' },
];

export default function AttackControl({ onAttack, disabled }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {attacks.map((attack) => {
                const Icon = attack.icon;
                return (
                    <button
                        key={attack.id}
                        onClick={() => onAttack(attack.id)}
                        disabled={disabled}
                        className={`flex flex-col items-center justify-center p-6 bg-slate-900/50 border ${attack.border} rounded-xl transition-all duration-300 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed group`}
                    >
                        <Icon className={`w-8 h-8 mb-2 ${attack.color} group-hover:scale-110 transition-transform`} />
                        <span className="font-semibold text-slate-200">{attack.name}</span>
                    </button>
                );
            })}
        </div>
    );
}
