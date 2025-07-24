import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import TeamSection from "@/components/team-section";
import HistorySection from "@/components/history-section";
import ContextSection from "@/components/context-section";
import ChallengesSection from "@/components/challenges-section";
import CDIOSection from "@/components/cdio-section";

export default function TabbedContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <Tabs defaultValue="professional-team" className="w-full">
        <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <TabsList className="bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-700 w-full justify-start h-16">
              <TabsTrigger 
                value="professional-team" 
                className="text-gray-900 dark:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white px-6 py-4 text-base font-semibold"
              >
                {t('tabs.professionalTeam')}
              </TabsTrigger>
              <TabsTrigger 
                value="mechatronic-team"
                className="text-gray-900 dark:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white px-6 py-4 text-base font-semibold"
              >
                {t('tabs.mechatronicTeam')}
              </TabsTrigger>
              <TabsTrigger 
                value="mechatronic-universe"
                className="text-gray-900 dark:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white px-6 py-4 text-base font-semibold"
              >
                {t('tabs.mechatronicUniverse')}
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="professional-team" className="mt-0">
          <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* Empty section for professors, graduates, and companies */}
            <section className="py-20 bg-white dark:bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Equipo de Profesionales EIA
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Profesores, egresados y empresas que apoyan nuestro desarrollo académico
                  </p>
                </div>
                
                {/* Content to be added later */}
                <div className="text-center py-20">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Contenido próximamente...
                  </p>
                </div>
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="mechatronic-team" className="mt-0">
          <div className="bg-black dark:bg-black text-white dark:text-white">
            <TeamSection />
            <CDIOSection />
            <ChallengesSection />
          </div>
        </TabsContent>

        <TabsContent value="mechatronic-universe" className="mt-0">
          <div className="bg-black text-white min-h-screen">
            <HistorySection />
            <ContextSection />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}