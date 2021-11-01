import Link from "next/link";
import { CreditCard, XSquare, Settings, Users, Grid } from "react-feather";

export default function SideBar() {
  return (
    <div className="bg-primary w-64">
      <nav>
        <div className="pl-4 pt-4">
          <svg
            width="35"
            height="16"
            viewBox="0 0 35 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5368 15.14C4.51013 15.14 3.59013 14.9733 2.7768 14.64C1.96346 14.3067 1.31013 13.8133 0.816797 13.16C0.336797 12.5067 0.0834636 11.72 0.0567969 10.8H3.6968C3.75013 11.32 3.93013 11.72 4.2368 12C4.54346 12.2667 4.94346 12.4 5.4368 12.4C5.94346 12.4 6.34346 12.2867 6.6368 12.06C6.93013 11.82 7.0768 11.4933 7.0768 11.08C7.0768 10.7333 6.9568 10.4467 6.7168 10.22C6.49013 9.99333 6.20346 9.80667 5.8568 9.66C5.52346 9.51333 5.04346 9.34667 4.4168 9.16C3.51013 8.88 2.77013 8.6 2.1968 8.32C1.62346 8.04 1.13013 7.62667 0.716797 7.08C0.303464 6.53333 0.0967969 5.82 0.0967969 4.94C0.0967969 3.63333 0.57013 2.61333 1.5168 1.88C2.46346 1.13333 3.6968 0.76 5.2168 0.76C6.76346 0.76 8.01013 1.13333 8.9568 1.88C9.90346 2.61333 10.4101 3.64 10.4768 4.96H6.7768C6.75013 4.50667 6.58346 4.15333 6.2768 3.9C5.97013 3.63333 5.5768 3.5 5.0968 3.5C4.68346 3.5 4.35013 3.61333 4.0968 3.84C3.84346 4.05333 3.7168 4.36667 3.7168 4.78C3.7168 5.23333 3.93013 5.58667 4.3568 5.84C4.78346 6.09333 5.45013 6.36667 6.3568 6.66C7.26346 6.96667 7.9968 7.26 8.5568 7.54C9.13013 7.82 9.62346 8.22667 10.0368 8.76C10.4501 9.29333 10.6568 9.98 10.6568 10.82C10.6568 11.62 10.4501 12.3467 10.0368 13C9.6368 13.6533 9.05013 14.1733 8.2768 14.56C7.50346 14.9467 6.59013 15.14 5.5368 15.14ZM23.2338 9.42C23.2338 8.26 23.4672 7.24667 23.9338 6.38C24.4138 5.51333 25.0738 4.84667 25.9138 4.38C26.7672 3.91333 27.7405 3.68 28.8338 3.68C30.2338 3.68 31.4005 4.04667 32.3338 4.78C33.2805 5.51333 33.9005 6.54667 34.1938 7.88H30.5538C30.2472 7.02667 29.6538 6.6 28.7738 6.6C28.1472 6.6 27.6472 6.84667 27.2738 7.34C26.9005 7.82 26.7138 8.51333 26.7138 9.42C26.7138 10.3267 26.9005 11.0267 27.2738 11.52C27.6472 12 28.1472 12.24 28.7738 12.24C29.6538 12.24 30.2472 11.8133 30.5538 10.96H34.1938C33.9005 12.2667 33.2805 13.2933 32.3338 14.04C31.3872 14.7867 30.2205 15.16 28.8338 15.16C27.7405 15.16 26.7672 14.9267 25.9138 14.46C25.0738 13.9933 24.4138 13.3267 23.9338 12.46C23.4672 11.5933 23.2338 10.58 23.2338 9.42Z"
              fill="white"
            />
            <path
              d="M17.3015 15.16C16.3282 15.16 15.4615 14.9933 14.7015 14.66C13.9415 14.3267 13.3415 13.8733 12.9015 13.3C12.4615 12.7133 12.2148 12.06 12.1615 11.34H15.5415C15.5815 11.7267 15.7615 12.04 16.0815 12.28C16.4015 12.52 16.7948 12.64 17.2615 12.64C17.6882 12.64 18.0148 12.56 18.2415 12.4C18.4815 12.2267 18.6015 12.0067 18.6015 11.74C18.6015 11.42 18.4348 11.1867 18.1015 11.04C17.7682 10.88 17.2282 10.7067 16.4815 10.52C15.6815 10.3333 15.0148 10.14 14.4815 9.94C13.9482 9.72667 13.4882 9.4 13.1015 8.96C12.7148 8.50667 12.5215 7.9 12.5215 7.14C12.5215 6.5 12.6948 5.92 13.0415 5.4C13.4015 4.86667 13.9215 4.44667 14.6015 4.14C15.2948 3.83333 16.1148 3.68 17.0615 3.68C18.4615 3.68 19.5615 4.02667 20.3615 4.72C21.1748 5.41333 21.6415 6.33333 21.7615 7.48H18.6015C18.5482 7.09333 18.3748 6.78667 18.0815 6.56C17.8015 6.33333 17.4282 6.22 16.9615 6.22C16.5615 6.22 16.2548 6.3 16.0415 6.46C15.8282 6.60667 15.7215 6.81333 15.7215 7.08C15.7215 7.4 15.8882 7.64 16.2215 7.8C16.5682 7.96 17.1015 8.12 17.8215 8.28C18.6482 8.49333 19.3215 8.70667 19.8415 8.92C20.3615 9.12 20.8148 9.45333 21.2015 9.92C21.6015 10.3733 21.8082 10.9867 21.8215 11.76C21.8215 12.4133 21.6348 13 21.2615 13.52C20.9015 14.0267 20.3748 14.4267 19.6815 14.72C19.0015 15.0133 18.2082 15.16 17.3015 15.16Z"
              fill="#FFC700"
            />
          </svg>
        </div>

        <div className="mt-56 flex justify-between flex-col space-y-6 text-white font-poppins px-4">
          <Link href="!#">
            <a className="flex gap-2 hover:text-secondary items-center">
              <Grid />
              Overview
            </a>
          </Link>
          <Link href="!#">
            <a className="flex gap-2 hover:text-secondary items-center">
              <CreditCard /> Cards
            </a>
          </Link>
          <Link href="!#">
            <a className="flex gap-2 hover:text-secondary items-center">
              <Users /> Students
            </a>
          </Link>
          <Link href="!#">
            <a className="flex gap-2 hover:text-secondary items-center">
              <XSquare />
              Register
            </a>
          </Link>
          <Link href="!#">
            <a className="flex gap-2 hover:text-secondary items-center">
              <Settings />
              Settings
            </a>
          </Link>
        </div>

        <div className="px-4 mt-40 font-poppins">
          <hr />
          <button className="flex mt-4 px-4 justify-center items-center text-center gap-2 text-white">
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className="inline"
                d="M10.7575 0.664062L13.75 3.47176L10.7575 6.27945V4.17368H5.5V2.76983H10.7575V0.664062ZM0.25 7.68329L3.2425 4.8756V6.98137H8.5V8.38522H3.2425V10.491L0.25 7.68329Z"
                fill="white"
              />
            </svg>
            logout
          </button>
        </div>
      </nav>
    </div>
  );
}
