import React from 'react';
import { Droplets, Truck, User } from 'lucide-react';

interface IssueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const IssueCard: React.FC<IssueCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="flex flex-col h-full">
      <div className={`p-4 ${color} rounded-t-lg flex items-center gap-3`}>
        <div className="text-white">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6 bg-white dark:bg-slate-800 shadow-md rounded-b-lg flex-grow border-t-0 border border-slate-200 dark:border-slate-700">
        <p className="text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  );
};

const KeyIssues: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Zentrale Umwelt- & Soziale Probleme</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Das Fast-Fashion-Modell priorisiert Geschwindigkeit und Kosten über Nachhaltigkeit und ethische Überlegungen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <IssueCard 
            icon={<Droplets size={24} />}
            title="Wasserverschmutzung"
            description="Die Modeindustrie ist der zweitgrößte Verschmutzer von sauberem Wasser weltweit. SHEINs Produktion trägt durch Textilfärbung und -behandlung erheblich zur Wasserverschmutzung bei. Eine einzige Jeans benötigt bis zu 7.500 Liter Wasser in der Produktion."
            color="bg-blue-600"
          />
          <IssueCard 
            icon={<Truck size={24} />}
            title="CO₂-Fußabdruck"
            description="Die globalen Lieferketten und schnellen Versandmethoden der Fast Fashion erzeugen massive CO₂-Emissionen. SHEINs Direktversandmodell basiert stark auf Luftfracht, die einen 20-30-mal höheren CO₂-Fußabdruck hat als der Seetransport."
            color="bg-amber-600"
          />
          <IssueCard 
            icon={<User size={24} />}
            title="Arbeitsbedingungen"
            description="Untersuchungen haben besorgniserregende Arbeitspraktiken in SHEINs Lieferkette aufgedeckt, einschließlich übermäßiger Arbeitszeiten und unsicherer Bedingungen. Arbeiter verdienen oft Stücklöhne, was zu extrem langen Arbeitszeiten führt, um Produktionsquoten zu erfüllen."
            color="bg-red-600"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyIssues;