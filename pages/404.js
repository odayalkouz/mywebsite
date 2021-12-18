import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
    const router = useRouter();

useEffect(()=>{
    setTimeout(()=>{
        router.push("/");
    },3000)
},[router])

    return ( 
        <div className="not-Found">
            <h1>Ooooops .... tgat page not found</h1>
            <Link href="/"><a>GO To Home page</a></Link>
        </div>
     );
}
export default NotFound;