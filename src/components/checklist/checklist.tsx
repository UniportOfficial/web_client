export default function Checklist({data}: {data:Array<any>}){
    return (
        <div className="">
            <h2 className="text-sm mb-2 text-slate-400">Bank Account</h2>
            <div className="border-2 border-slate-400 p-4 bg-slate-200 rounded-lg text-xs">
            { 
                data.map((check, index)=>{
                    return (
                        <div 
                            className="flex items-center mb-2"
                            key={index} 
                        >
                            <input className="mr-2" type="checkbox"/>
                            <label>{check.content}</label>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}