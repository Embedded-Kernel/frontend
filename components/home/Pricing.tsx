export function Pricing() {
  let plans = [
    {
      id: 1,
      name: "Basic Plan",
      features: [
        "You can register your school",
        "You can register your school",
        "You can register your school",
        "You can register your school",
        "You can register your school",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      features: [
        "You can register your school",
        "You can register your school",
        "You can register your school",
        "You can register your school",
        "You can register your school",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      features: [
        "You can register your school",
        "You can register your school",
        "You can register your school",
        "You can register your school",
        "You can register your school",
      ],
    },
  ];

  return (
    <div className="bg-lightDark grid place-content-center font-poppins">
      <h1 className="text-center font-bold text-4xl py-10">Pricing plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-14">
        {plans.map((item) => (
          <div
            key={item.id}
            className="bg-white px-10 rounded-sm border border-gray-100 py-12 shadow-md"
          >
            <h3 className="font-extrabold py-4 text-xl  text-center">
              {item.name}
            </h3>

            <ul>
              {" "}
              {item.features.map((feat) => (
                <div key={`${feat}`} className="flex items-center gap-4 pb-6">
                  <span>
                    <svg
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1L6 12L1 7"
                        stroke="#FFC700"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {feat}
                </div>
              ))}
            </ul>
            <div className="text-center">
              <button className="bg-primary text-white px-12 shadow-sm py-3 rounded-md">
                subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
