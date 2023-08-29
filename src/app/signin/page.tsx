export default function Signin(){
    return(
        <section className="px-8">
            <div className="brand-logo"><h1>Uniport</h1></div>
            <div className="input-group w-full my-6">
                <input 
                    className="w-full border border-black rounded-lg text-xs px-4 py-3"
                    placeholder="E-mail"
                />
            </div>
            <div className="input-group w-full">
                <input
                    className="w-full border border-black rounded-lg text-xs px-4 py-3"
                    placeholder="Password"
                />
            </div>
            <a className="block w-full text-sm text-center my-4 text-slate-300">Find your ID &  Password</a>
            <button className="w-full py-3 rounded-md bg-slate-400 text-white">Login</button>
            <div className="notice-group flex flex-col justify-center items-center py-16">
                <p className="">Don't have an account yet?</p>
                <a className="font-semibold">Sign up</a>
            </div>
            <div className="boundary border-t border-black">
                <div className="relative w-full flex justify-center">
                    <span className="absolute -top-[12px] bg-white">&nbsp; Or &nbsp;</span>
                </div>
            </div>
            <div className="py-4">

            </div>
        </section>
    )
}