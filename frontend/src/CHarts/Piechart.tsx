import React,{useState} from "react";
import { useStore } from "react-redux";
import Charts from "./Charts";


interface MyObject {
  height: number;
  weight: number;
}


const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [50, 25, 25],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
  animation: {
    animateScale: true,
    animateRotate: true,
    duration: 2000,
    easing: "easeOutQuart",
  },
};
const config = {
  type: "doughnut",
  data: data,
};
interface Props {}

const Piechart: React.FC<Props> = () => {
  const initialData = {
    height: 0,
    weight: 0,
  };
  const [data, setData] = useState<MyObject>(initialData);
  const [bmi, setBmi] = useState(0);

  const handleInputChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleBMI = (e: any) => {
    e.preventDefault();

    const index = data.weight / ((data.height * data.height) / 10000);
    setBmi(+index.toFixed(2));
    setData(initialData)
  };

  return (
    <div
      style={{
        height: "auto",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        margin: "auto",
        justifyContent: "space-evenly",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          width: "45%",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <p className="text-[#f2305a]  text-5xl py-9">Lets Anlayze your BMI</p>
        <form className="space-y-6 w-1/2 m-auto" onSubmit={handleBMI}>
          <div>
            <label
              htmlFor="height"
              className="block text-gray-700 text-left font-bold"
            >
              Height (in cms)
            </label>
            <input
              // id="email"
              name="height"
              type="text"
              autoComplete="email"
              onChange={handleInputChange}
              className="mt-1 block w-full h-10 py-2 px-3 border-black-300 rounded-md shadow-sm focus:ring-[#f2305a] focus:border-[#f2305a] sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="weight"
              className="block text-gray-700 text-left font-bold"
            >
              Weight (in Kg)
            </label>
            <input
              // id="password"
              onChange={handleInputChange}
              name="weight"
              type="text"
              autoComplete="current-password"
              className="mt-1 block w-full h-10 py-2 px-3 border-red-300 rounded-md shadow-sm focus:ring-[#f2305a] focus:border-[#f2305a] sm:text-sm"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="ml-3 w-1/2 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#f2305a] border border-transparent rounded-md shadow-sm hover:bg-[#ed496d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f2305a]"
              // onClick={handleSignUpButton}
            >
              Analyze BMI
            </button>
          </div>
        </form>
        {bmi ? <p className="text-xl p-5">Your BMI index is : {bmi}</p> : ""}
      </div>
      <div
        style={{
          marginTop: "30px",
          width: "40%",
          height: "400px",
        }}
      >
        {bmi ? (
          <Charts />
        ) : (
          <img src="https://media.tenor.com/FAiCGANT8ikAAAAC/thinking.gif" />
        )}
      </div>
    </div>
  );
};

export default Piechart;
