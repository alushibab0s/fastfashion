import React from 'react';
import { Sparkles, Timer, Factory, ShoppingBag } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  iconColor: string;  // Add a prop for icon color class
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, description, iconColor }) => {
  return (
    <div className="bg-slate-900 p-6 rounded-lg border border-white transition-colors">
      <div className="flex items-center gap-4 mb-4">
        {/* Use iconColor for icon wrapper */}
        <div className={`p-3 rounded-lg ${iconColor}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">{value}</h3>
          <p className="text-slate-400 font-medium">{label}</p>
        </div>
      </div>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SHEIN in Zahlen</h2>
          <p className="text-slate-300">
            Das Geschäftsmodell und der ökologische Fußabdruck des Fast-Fashion-Giganten zeigen das wahre Ausmaß der Auswirkungen der Branche.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon={<Sparkles size={24} />}
            iconColor="text-yellow-400"
            value="10.000+"
            label="Neue Styles täglich"
            description="SHEIN bringt täglich über 10.000 neue Styles heraus, verglichen mit ~50-100 bei traditionellen Einzelhändlern."
          />
          <StatCard 
            icon={<Timer size={24} />}
            iconColor="text-blue-400"
            value="3-7 Tage"
            label="Produktionszeit"
            description="Vom Design bis zur Produktion in weniger als einer Woche, verglichen mit Monaten bei traditionellen Modemarken."
          />
          <StatCard 
            icon={<Factory size={24} />}
            iconColor="text-white"
            value="16 Mio. Tonnen"
            label="Jährliche CO₂-Emissionen"
            description="Geschätzte jährliche Kohlenstoffemissionen aus SHEINs Betrieb und Lieferkette."
          />
          <StatCard 
            icon={<ShoppingBag size={24} />}
            iconColor="text-red-500"
            value="30+ Mrd. €"
            label="Jahresumsatz (2023)"
            description="Damit ist es eines der wertvollsten Fast-Fashion-Unternehmen weltweit."
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
