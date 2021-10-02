import Link from 'next/link';

export function Nav() {
  return (
    <nav className="flex font-poppins justify-between block py-4 px-8">
      <div>
        <svg width="69" height="30" viewBox="0 0 69 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.0736 29.28C9.02026 29.28 7.18026 28.9467 5.55359 28.28C3.92693 27.6133 2.62026 26.6267 1.63359 25.32C0.673594 24.0133 0.166927 22.44 0.113594 20.6H7.39359C7.50026 21.64 7.86026 22.44 8.47359 23C9.08693 23.5333 9.88693 23.8 10.8736 23.8C11.8869 23.8 12.6869 23.5733 13.2736 23.12C13.8603 22.64 14.1536 21.9867 14.1536 21.16C14.1536 20.4667 13.9136 19.8933 13.4336 19.44C12.9803 18.9867 12.4069 18.6133 11.7136 18.32C11.0469 18.0267 10.0869 17.6933 8.83359 17.32C7.02026 16.76 5.54026 16.2 4.39359 15.64C3.24693 15.08 2.26026 14.2533 1.43359 13.16C0.606927 12.0667 0.193594 10.64 0.193594 8.88C0.193594 6.26667 1.14026 4.22667 3.03359 2.76C4.92693 1.26667 7.39359 0.52 10.4336 0.52C13.5269 0.52 16.0203 1.26667 17.9136 2.76C19.8069 4.22667 20.8203 6.28 20.9536 8.92H13.5536C13.5003 8.01333 13.1669 7.30667 12.5536 6.8C11.9403 6.26667 11.1536 6 10.1936 6C9.36693 6 8.70026 6.22667 8.19359 6.68C7.68693 7.10666 7.43359 7.73333 7.43359 8.56C7.43359 9.46667 7.86026 10.1733 8.71359 10.68C9.56693 11.1867 10.9003 11.7333 12.7136 12.32C14.5269 12.9333 15.9936 13.52 17.1136 14.08C18.2603 14.64 19.2469 15.4533 20.0736 16.52C20.9003 17.5867 21.3136 18.96 21.3136 20.64C21.3136 22.24 20.9003 23.6933 20.0736 25C19.2736 26.3067 18.1003 27.3467 16.5536 28.12C15.0069 28.8933 13.1803 29.28 11.0736 29.28ZM46.4677 17.84C46.4677 15.52 46.9343 13.4933 47.8677 11.76C48.8277 10.0267 50.1477 8.69333 51.8277 7.76C53.5343 6.82667 55.481 6.36 57.6677 6.36C60.4677 6.36 62.801 7.09333 64.6677 8.56C66.561 10.0267 67.801 12.0933 68.3877 14.76H61.1077C60.4943 13.0533 59.3077 12.2 57.5477 12.2C56.2943 12.2 55.2943 12.6933 54.5477 13.68C53.801 14.64 53.4277 16.0267 53.4277 17.84C53.4277 19.6533 53.801 21.0533 54.5477 22.04C55.2943 23 56.2943 23.48 57.5477 23.48C59.3077 23.48 60.4943 22.6267 61.1077 20.92H68.3877C67.801 23.5333 66.561 25.5867 64.6677 27.08C62.7743 28.5733 60.441 29.32 57.6677 29.32C55.481 29.32 53.5343 28.8533 51.8277 27.92C50.1477 26.9867 48.8277 25.6533 47.8677 23.92C46.9343 22.1867 46.4677 20.16 46.4677 17.84Z"
            fill="#2F2E41"
          />
          <path
            d="M34.603 29.32C32.6563 29.32 30.923 28.9867 29.403 28.32C27.883 27.6533 26.683 26.7467 25.803 25.6C24.923 24.4267 24.4296 23.12 24.323 21.68H31.083C31.163 22.4533 31.523 23.08 32.163 23.56C32.803 24.04 33.5896 24.28 34.523 24.28C35.3763 24.28 36.0296 24.12 36.483 23.8C36.963 23.4533 37.203 23.0133 37.203 22.48C37.203 21.84 36.8696 21.3733 36.203 21.08C35.5363 20.76 34.4563 20.4133 32.963 20.04C31.363 19.6667 30.0296 19.28 28.963 18.88C27.8963 18.4533 26.9763 17.8 26.203 16.92C25.4296 16.0133 25.043 14.8 25.043 13.28C25.043 12 25.3896 10.84 26.083 9.8C26.803 8.73333 27.843 7.89333 29.203 7.28C30.5896 6.66666 32.2296 6.36 34.123 6.36C36.923 6.36 39.123 7.05333 40.723 8.44C42.3496 9.82667 43.283 11.6667 43.523 13.96H37.203C37.0963 13.1867 36.7496 12.5733 36.163 12.12C35.603 11.6667 34.8563 11.44 33.923 11.44C33.123 11.44 32.5096 11.6 32.083 11.92C31.6563 12.2133 31.443 12.6267 31.443 13.16C31.443 13.8 31.7763 14.28 32.443 14.6C33.1363 14.92 34.203 15.24 35.643 15.56C37.2963 15.9867 38.643 16.4133 39.683 16.84C40.723 17.24 41.6296 17.9067 42.403 18.84C43.203 19.7467 43.6163 20.9733 43.643 22.52C43.643 23.8267 43.2696 25 42.523 26.04C41.803 27.0533 40.7496 27.8533 39.363 28.44C38.003 29.0267 36.4163 29.32 34.603 29.32Z"
            fill="#FFC700"
          />
        </svg>
      </div>
      <ul className="flex items-center font-semibold space-x-4 text-secondary">
        <li>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </li>
        <li>
          <Link href="partiners">
            <a>Our partners</a>
          </Link>
        </li>
        <li>
          <Link href="why">
            <a>Why us</a>
          </Link>
        </li>
        <li>
          <Link href="contact">
            <a>Contact us</a>
          </Link>
        </li>
        <li className="px-8 py-2 bg-primary rounded-md">
          <Link href="login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}