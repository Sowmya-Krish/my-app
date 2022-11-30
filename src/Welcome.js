export function Welcome({name}){
 
    return( <section>
   <h1 className  = "user-name">
    hello, <span className="user-iname">{name}</span>
   </h1>
    </section>
    )
    }

    export const double = n => n * 2;