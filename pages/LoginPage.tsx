import Button from "../components/Button";
import HomeSidebar from "../components/HomeSideBar";
const LoginPage = () => {
    return (
        <div className="container grid grid-cols-12">
            <HomeSidebar/>
            <div className="col-span-9">
                <div className="h-16 flex justify-end">
                    <p className="col-span-4 mr-4 mt-4">Already have an account?</p>
                    <Button name={'LOGIN'}/>
                </div>
                <div>
                    <p>Create an account in Smart SC</p>
                    <p className="italic">Enter your account details here below</p>
                    <input className="border-b-2 border-fuchsia-600 outline-none" type="text" placeholder="First name"/>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;
