import React from 'react';

const IndustryComparison: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Branchenvergleich der Auswirkungen</h2>
          <p className="text-slate-600 dark:text-slate-300">
            SHEIN im Vergleich zu traditionellem Einzelhandel und nachhaltigen Alternativen
          </p>
        </div>
        
        <div className="relative overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-slate-900 text-white">
              <tr>
                <th scope="col" className="px-6 py-4">Auswirkungsfaktor</th>
                <th scope="col" className="px-6 py-4">SHEIN (Ultra-Fast)</th>
                <th scope="col" className="px-6 py-4">Traditioneller Handel</th>
                <th scope="col" className="px-6 py-4">Nachhaltige Marken</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700">
                <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                  Neue Styles pro Monat
                </th>
                <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">
                  300.000+
                </td>
                <td className="px-6 py-4 text-amber-600 dark:text-amber-400 font-semibold">
                  1.000-5.000
                </td>
                <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">
                  50-500
                </td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-600">
                <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                  Durchschnittliche Lebensdauer
                </th>
                <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">
                  5-10 Tragungen
                </td>
                <td className="px-6 py-4 text-amber-600 dark:text-amber-400 font-semibold">
                  30-50 Tragungen
                </td>
                <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">
                  100+ Tragungen
                </td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700">
                <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                  Wasserverbrauch pro Artikel
                </th>
                <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">
                  Hoch (2.500-7.500 Liter)
                </td>
                <td className="px-6 py-4 text-amber-600 dark:text-amber-400 font-semibold">
                  Mittel (1.900-5.700 Liter)
                </td>
                <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">
                  Niedrig (380-1.900 Liter)
                </td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-600">
                <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                  CO₂-Fußabdruck
                </th>
                <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">
                  Sehr hoch (Luftfracht)
                </td>
                <td className="px-6 py-4 text-amber-600 dark:text-amber-400 font-semibold">
                  Hoch (See & Land)
                </td>
                <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">
                  Niedrig (lokale Produktion)
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-700">
                <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                  Giftstoffe & Chemikalien
                </th>
                <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">
                  Hoch (weniger Kontrolle)
                </td>
                <td className="px-6 py-4 text-amber-600 dark:text-amber-400 font-semibold">
                  Mittel (einige Kontrollen)
                </td>
                <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">
                  Niedrig (natürliche Färbung)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-sm text-slate-500 dark:text-slate-400 text-center">
          Datenquellen: Umweltbundesamt, Fashion Revolution, Ellen MacArthur Foundation, Quantis
        </div>
      </div>
    </section>
  );
};

export default IndustryComparison;