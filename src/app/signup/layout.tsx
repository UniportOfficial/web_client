import { ReactNode } from "react";

export default function signupLayout(
    {children}:
    {children: ReactNode}
){
    return (
        <section>
            {children}
        </section>
    )
}