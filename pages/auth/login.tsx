import { Login } from "../../components/Login";
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login </title>
      </Head>
      <section className="flex justify-center items-center min-h-screen">
        <Login />
      </section>
    </>
  );
}

/* const SignUpPage = () => { */
/*   /1* const [currentFile, setCurrentFile] = useState(''); *1/ */
/*   /1* const fileInput = useRef(); *1/ */

/*   return ( */
/*     <div className="container grid grid-cols-12"> */
/*       <HomeSidebar /> */
/*       <div className="col-span-8"> */
/*         <div className="h-16 flex justify-end pr-40"> */
/*           <p className="col-span-4 mr-4 mt-4">Dont&apos;t have an account?</p> */
/*           <Button name={'SIGN UP'} /> */
/*         </div> */
/*         <div className="ml-10 mt-10 flex flex-col"> */
/*           <p className="font-sans text-4xl mb-3">Log into Smart SC</p> */
/*           <p className="italic mt-3">Enter your login details here below</p> */
/*           <div className="flex gap-x-20 flex-row mt-7 w-full flex-start pr-6"> */
/*             <div className="flex flex-col gap-y-10 w-2/4"> */
/*               <div className="flex gap-x-4"> */
/*                 <Image src="/assets/images/si-user.svg" alt="profile icon" width={20} height={20} /> */
/*                 {/1* <Input placeholder={'Email address or user name'} /> *1/} */
/*               </div> */
/*               <div className="flex gap-x-4"> */
/*                 <Image src="/assets/images/si-user.svg" alt="profile icon" width={20} height={20} /> */

/*                 {/1* <Input placeholder={'Password'} /> *1/} */
/*               </div> */
/*               <p className="ml-56">Forgot your password?</p> */
/*               <div className="flex flex-row gap-x-2 items-center"> */
/*                 <input type="checkbox" /> */
/*                 <label htmlFor="">Remember me</label> */
/*                 {/*<span>Remember me</span>*/
/*               </div> */
/*               <button className="bg-sideBarColor shadow-lg text-white font-[semi-bold] py-2 w-32">Sign In</button> */
/*             </div> */
/*           </div> */
/*         </div> */
/*       </div> */
/*     </div> */
/*   ); */
/* }; */
/* export default SignUpPage; */
