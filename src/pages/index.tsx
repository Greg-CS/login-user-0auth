import { BsFacebook, BsGithub, BsDiscord } from "react-icons/bs";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="h-[30rem] w-[30rem] p-10 bg-white rounded-2xl">
        <div>
          <p className="text-black font-bold text-2xl">
            Welcome {user.name}! 
          </p>
          <span className="text-black">
            Lmk if this works for you
          </span>
          <button>
            
          </button>
        </div>
        <div className="relative top-32">
          <a className="btn w-full" href="/api/auth/logout">Logout</a>      
        </div>
      </div>
    </main>
  )
  }

  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="h-[30rem] w-[30rem] grid bg-white rounded-2xl justify-center items-center">
        <div className="py-10">
          <a className="btn w-[45vw] h-[15vh] hover:bg-slate-300 border-0" href="/api/auth/login">Login</a>
        </div>
        <div className="divider text-black">OR</div>
        <div className="py-10">
          <a className="btn w-[45vw] h-[15vh] hover:bg-slate-300 border-0" href="/api/auth/login">register</a>
        </div>
      </div>
    </main>
  )
}
