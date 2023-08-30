import Navigation from "@/components/navigation/Navigation";
import IntroCarousel from '@/components/main/IntroCarousel';
import ChecklistCarousel from "@/components/main/ChecklistCarousel";

export default function Main(){
    return(
        <main>
            <section className="px-8 py-4">
                <BrandLogo></BrandLogo>
                <div className="content-container py-2">
                    <h1 className="text-2xl">What is A.B.C</h1>
                    <IntroCarousel></IntroCarousel>
                    <div className="catchphrase text-center text-sm text-slate-400">
                        <p>We can help you with</p>
                        <p>complex paperwork and reservations</p>
                    </div>
                </div>
                <ChecklistCarousel/>
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

function BrandLogo(){
    return(
        <div className="brand-wrapper">
            <h1 className="text-2xl">Uni-Port</h1>
            <p className="text-sm text-slate-400">Uniting the World</p>
        </div>
    )
}