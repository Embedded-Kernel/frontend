import * as React from 'react';

type MmainPage ={
  prevStep? : ()=> void
  skip? : () => void
  nextStep : (_isComplete : boolean) =>void
  isVertical? : boolean
}

function Mainpage({
  prevStep,
  nextStep,
  skip,
  isVertical,
}: MmainPage) {
  const [value, setValue] = React.useState('');
  const handleChange = (event : any) =>{
    setValue(event.target.value);
  }

  const moveBack = () =>{
    if(prevStep){
      prevStep()
    }
  }

  const jump = () =>{
    if(skip){
      skip()
    }
  }

  const handleSubmit = (e:any) =>{
    e.preventDefault
    nextStep(true);

  }

  return (
    <form onSubmit={handleSubmit}>
    {!isVertical}
  <div className=" min-h-screen py-16 px-10 font-poppins fixed flex justify-center">
    <div className="  w-3/4">
      <div className="relative  py-8 bg-white   mx-8 md:mx-0  rounded-md sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="  flex  flex-col items-center justify-center gap-4 text-sm ">
  
            <svg className="block"  width="52" height="23" viewBox="0 0 52 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.8052 22.21C7.2652 22.21 5.8852 21.96 4.6652 21.46C3.4452 20.96 2.4652 20.22 1.7252 19.24C1.0052 18.26 0.625195 17.08 0.585195 15.7H6.0452C6.1252 16.48 6.3952 17.08 6.8552 17.5C7.3152 17.9 7.9152 18.1 8.6552 18.1C9.4152 18.1 10.0152 17.93 10.4552 17.59C10.8952 17.23 11.1152 16.74 11.1152 16.12C11.1152 15.6 10.9352 15.17 10.5752 14.83C10.2352 14.49 9.8052 14.21 9.2852 13.99C8.7852 13.77 8.0652 13.52 7.1252 13.24C5.7652 12.82 4.6552 12.4 3.7952 11.98C2.9352 11.56 2.1952 10.94 1.5752 10.12C0.955195 9.3 0.645195 8.23 0.645195 6.91C0.645195 4.95 1.3552 3.42 2.7752 2.32C4.1952 1.2 6.0452 0.64 8.3252 0.64C10.6452 0.64 12.5152 1.2 13.9352 2.32C15.3552 3.42 16.1152 4.96 16.2152 6.94H10.6652C10.6252 6.26 10.3752 5.73 9.9152 5.35C9.4552 4.95 8.8652 4.75 8.1452 4.75C7.5252 4.75 7.0252 4.92 6.6452 5.26C6.2652 5.58 6.0752 6.05 6.0752 6.67C6.0752 7.35 6.3952 7.88 7.0352 8.26C7.6752 8.64 8.6752 9.05 10.0352 9.49C11.3952 9.95 12.4952 10.39 13.3352 10.81C14.1952 11.23 14.9352 11.84 15.5552 12.64C16.1752 13.44 16.4852 14.47 16.4852 15.73C16.4852 16.93 16.1752 18.02 15.5552 19C14.9552 19.98 14.0752 20.76 12.9152 21.34C11.7552 21.92 10.3852 22.21 8.8052 22.21ZM35.3507 13.63C35.3507 11.89 35.7007 10.37 36.4007 9.07C37.1207 7.77 38.1107 6.77 39.3707 6.07C40.6507 5.37 42.1107 5.02 43.7507 5.02C45.8507 5.02 47.6007 5.57 49.0007 6.67C50.4207 7.77 51.3507 9.32 51.7907 11.32H46.3307C45.8707 10.04 44.9807 9.4 43.6607 9.4C42.7207 9.4 41.9707 9.77 41.4107 10.51C40.8507 11.23 40.5707 12.27 40.5707 13.63C40.5707 14.99 40.8507 16.04 41.4107 16.78C41.9707 17.5 42.7207 17.86 43.6607 17.86C44.9807 17.86 45.8707 17.22 46.3307 15.94H51.7907C51.3507 17.9 50.4207 19.44 49.0007 20.56C47.5807 21.68 45.8307 22.24 43.7507 22.24C42.1107 22.24 40.6507 21.89 39.3707 21.19C38.1107 20.49 37.1207 19.49 36.4007 18.19C35.7007 16.89 35.3507 15.37 35.3507 13.63Z"
                fill="black" />
              <path
                d="M26.4522 22.24C24.9922 22.24 23.6922 21.99 22.5522 21.49C21.4122 20.99 20.5122 20.31 19.8522 19.45C19.1922 18.57 18.8222 17.59 18.7422 16.51H23.8122C23.8722 17.09 24.1422 17.56 24.6222 17.92C25.1022 18.28 25.6922 18.46 26.3922 18.46C27.0322 18.46 27.5222 18.34 27.8622 18.1C28.2222 17.84 28.4022 17.51 28.4022 17.11C28.4022 16.63 28.1522 16.28 27.6522 16.06C27.1522 15.82 26.3422 15.56 25.2222 15.28C24.0222 15 23.0222 14.71 22.2222 14.41C21.4222 14.09 20.7322 13.6 20.1522 12.94C19.5722 12.26 19.2822 11.35 19.2822 10.21C19.2822 9.25 19.5422 8.38 20.0622 7.6C20.6022 6.8 21.3822 6.17 22.4022 5.71C23.4422 5.25 24.6722 5.02 26.0922 5.02C28.1922 5.02 29.8422 5.54 31.0422 6.58C32.2622 7.62 32.9622 9 33.1422 10.72H28.4022C28.3222 10.14 28.0622 9.68 27.6222 9.34C27.2022 9 26.6422 8.83 25.9422 8.83C25.3422 8.83 24.8822 8.95 24.5622 9.19C24.2422 9.41 24.0822 9.72 24.0822 10.12C24.0822 10.6 24.3322 10.96 24.8322 11.2C25.3522 11.44 26.1522 11.68 27.2322 11.92C28.4722 12.24 29.4822 12.56 30.2622 12.88C31.0422 13.18 31.7222 13.68 32.3022 14.38C32.9022 15.06 33.2122 15.98 33.2322 17.14C33.2322 18.12 32.9522 19 32.3922 19.78C31.8522 20.54 31.0622 21.14 30.0222 21.58C29.0022 22.02 27.8122 22.24 26.4522 22.24Z"
                fill="#FFC700" />
            </svg>
            <h1 className=" font-poppins mt-4 text-black-900 font-bold">Register your school</h1>
            <h2 className="uppercase">Step 1</h2>
          </div>
  
          <div>
            <div
              className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="flex items-center space-x-16 text-sm font-medium  ">
                <div className="flex flex-col  ">
                  <label className=" pb-2 text-yellow-400 font-bold">First name</label>
                  <input type="text"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="First name" />
                </div>
                <div className="flex flex-col ">
                  <label className="pb-2 text-yellow-400 font-bold">Last name</label>
                  <input type="text"
                    className="px-4 py-2 border  focus:outline-none border-gray-300 rounded-md text-gray-600"
                    placeholder="Last name" />
                </div>
              </div>
              <div className="flex items-center space-x-16 text-sm font-medium">
                <div className="flex flex-col   mt-4">
                  <label className=" pb-2 font-bold text-yellow-400">Email address</label>
                  <input type="text"
                    className="px-4 py-2 border  border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Email address" />
                </div>
                <div className="flex flex-col mt-4 ">
                  <label className="pb-2 font-bold text-yellow-400">Phone number</label>
                  <input type="text"
                    className="px-4 py-2 border   border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Phone number" />
                </div>
              </div>
              <div className="flex items-center space-x-16 text-sm font-medium">
                <div className="flex flex-col   mt-4">
                  <label className="pb-2 font-bold text-yellow-400">School name</label>
                  <input type="text"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter the school name" />
                </div>
                <div className="flex flex-col mt-4 ">
                  <label className="pb-2 font-bold text-yellow-400">Your role at school</label>
                  <input type="text"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Religion" />
                </div>
              </div>
              <div className="flex items-center space-x-16 text-sm ">
                {/* <div className="flex flex-col   mt-4">
                  <label className="pb-2 font-medium">Delete student</label>
                  <p className="text-gray-400 ">By deleting this student you will loose all data</p>
                </div> */}
                <div className="flex flex-col items-end mt-4 ">
                  <button
                   type="submit" className="px-4 py-2 flex justify-center items-center w-24 border bg-primary rounded text-white focus:outline-none">Next</button>
                </div>
              </div>
  
            </div>
            {/* <div>
              <button
                className="bg-gray-900 flex justify-center  ml-44 items-center w-28 text-white px-4 py-2 rounded-md focus:outline-none"
                onClick={()=> setShowModal((prev: any) => !prev)}
                >Done</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
  )
}







export default Mainpage;