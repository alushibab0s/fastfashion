import React from 'react';
import { BookOpen, FileText, Video, Globe } from 'lucide-react';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, link }) => {
  return (
    <a 
      href={link} 
      className="block bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 transition-colors"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="text-red-500">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-sm">{description}</p>
    </a>
  );
};

const Resources: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Weitere Ressourcen</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Entdecken Sie diese wertvollen Ressourcen, um mehr über die Auswirkungen von Fast Fashion zu erfahren und nachhaltige Alternativen zu unterstützen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard 
            icon={<BookOpen size={24} />}
            title="Forschungsberichte"
            description="Wissenschaftliche Arbeiten und Branchenberichte über die Umweltauswirkungen von Fast Fashion."
            link="#"
          />
          <ResourceCard 
            icon={<FileText size={24} />}
            title="Bildungsleitfäden"
            description="Praktische Anleitungen zum Erkennen und Vermeiden nicht nachhaltiger Modepraktiken."
            link="#"
          />
          <ResourceCard 
            icon={<Video size={24} />}
            title="Dokumentationen"
            description="Überzeugende Dokumentarfilme, die die globalen Auswirkungen von Fast Fashion untersuchen."
            link="#"
          />
          <ResourceCard 
            icon={<Globe size={24} />}
            title="Nachhaltige Marken"
            description="Verzeichnis von Modemarken, die sich ethischen und nachhaltigen Praktiken verschrieben haben."
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Resources;