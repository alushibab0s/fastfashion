import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-bg-slate-100 to-red-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Den vollständigen Bericht lesen</h2>
            <p className="text-slate-600 mb-8">
              Tauchen Sie tiefer ein in unsere umfassende Analyse der Umwelt- und sozialen Auswirkungen von Fast Fashion, mit detaillierten Fallstudien und praktischen Alternativen.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
                <p className="text-slate-700">Detaillierte Umweltverträglichkeitsprüfung</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
                <p className="text-slate-700">Arbeitnehmerrechte und Arbeitsbedingungen</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
                <p className="text-slate-700">Nachhaltige Mode-Alternativen</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
                <p className="text-slate-700">Politische Empfehlungen</p>
              </div>
            </div>
            <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors">
              Vollständigen Bericht lesen <ArrowRight size={20} />
            </button>
          </div>
          <div 
            className="md:w-1/2 bg-cover bg-center h-64 md:h-auto"
            style={{ 
              backgroundImage: 'url("https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;