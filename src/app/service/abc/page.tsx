import Navigation from "@/components/navigation/Navigation";
import IntroCarousel from '@/components/service/IntroCarousel';
import ChecklistCarousel from "@/components/service/ChecklistCarousel";

import BrandLogo from "@/components/service/BrandLogo";

const checklistBankAccount = require('/public/checklist/bankaccount.json');

export default function ABC(){
    const checklists = [checklistBankAccount, checklistBankAccount];
    return(
        <main>
            <section className="px-8 py-4">
                <BrandLogo/>
                <div className="content-container py-2">
                    <h1 className="text-2xl">What is A.B.C</h1>
                    <IntroCarousel></IntroCarousel>
                    <div className="catchphrase text-center text-sm text-slate-400">
                        <p>We can help you with</p>
                        <p>complex paperwork and reservations</p>
                    </div>
                </div>
                <ChecklistCarousel datas={checklists}/>
                <div className="catchphrase py-4 text-center text-xs text-slate-400">
                    <p>Eliminate repetitive outlining tasks once and for all</p>
                </div>
                <button className="w-full h-12 rounded-lg bg-slate-400 text-white">Get Started</button>
            </section>
            <div className="navgiation-wrapper mb-20"></div>
            <Navigation/>
        </main>
    )
}