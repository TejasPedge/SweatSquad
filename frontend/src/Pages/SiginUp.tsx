import React, { useEffect, useState } from "react";
import fitnessBLogo from "../Assets/fitnessBLogo.png";
import { IconType } from "react-icons/lib/esm/iconBase";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Toast from "./Toast";
// import { SignUpModal } from "./SignUpModal";

type QuestionType = {
  question: string;
  optionA: string;
  optionB: string;
  answer: string | null;
};
type Props = {
  icon: React.ElementType;
  label: string;
};

const IconButton: React.FC<Props> = ({ icon: Icon, label }) => (
  <button aria-label={label}>
    <Icon size={30} />
  </button>
);

const initialQuestions: QuestionType[] = [
  {
    question: "What is your primary goal?",
    optionA: "Lose Weight",
    optionB: "Build Muscle",
    answer: null,
  },
  {
    question: "What is your Gender?",
    optionA: "Male",
    optionB: "Female",
    answer: null,
  },
  {
    question: "Please describe your typical day?",
    optionA: "Mostly at Home",
    optionB: "At the Office",
    answer: null,
  },
  {
    question: "How old are you?",
    optionA: "",
    optionB: "",
    answer: null,
  },
  {
    question: "How tall are you?",
    optionA: "",
    optionB: "",
    answer: null,
  },
  {
    question: "What's your current weight?",
    optionA: "",
    optionB: "",
    answer: null,
  },
  {
    question: "Got it! And what's your goal weight?",
    optionA: "",
    optionB: "",
    answer: null,
  },
];

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSwitchOn, setisSwitchOn] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false)
  const [gender, setGender] = useState<string>("")
  const [primaryGoal, setPrimaryGoal] = useState<string>("")
  const [typicalDay, setTypicalDay] = useState<string>("")
  const [age, setAge] = useState<any>(0)
  const [currentWeight, setCurrentWeight] = useState<any>(0)
  const [PHeight, setPHeight] = useState<any>(0)
  const [goalWeight, setGoalWeight] = useState<any>(0)
  const [showToast, setShowToast] = useState(false);

  const Icon: IconType = BsArrowLeft;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const updatedQuestions = [...questions];
    // updatedQuestions[currentQuestionIndex].answer = answer;
    // setQuestions(updatedQuestions);
    // console.log(event.target.name+"-"+event.target.value)
    const { name, value } = event.target
    if (name === "How old are you?") {
      setAge(value)
    } else if (name === "How tall are you?") {
      setPHeight(value)
    } else if (name === "What's your current weight?") {
      setCurrentWeight(value)
    } else if (name === "Got it! And what's your goal weight?") {
      setGoalWeight(value)
    }
  };

  // console.log("primaryGoal" + "-" + primaryGoal)
  // console.log("typicalDay" + "-" + typicalDay)
  // console.log("gender" + "-" + gender)
  // console.log("goalWeight" + "-" + goalWeight)
  // console.log("PHeight" + "-" + PHeight)
  // console.log("currentWeight" + "-" + currentWeight)
  // console.log("age" + "-" + age)

  const handleSignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = "Sign Up Successful!!!";
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
    return <Toast message={message} type="success" />; // pass type prop value
  };



  const handleChange = (val: number) => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + val);
  }
  const shouldRenderSwitch = ["How old are you?", "How tall are you?", "What's your current weight?", "Got it! And what's your goal weight?"].includes(questions[currentQuestionIndex].question);
  useEffect(() => {
    if (shouldRenderSwitch) {
      setisSwitchOn(true);
    } else {
      setisSwitchOn(false);
    }
  }, [shouldRenderSwitch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name + "-" + value)
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const progress = Math.floor(((currentQuestionIndex + 1) / questions.length) * 100);

  return (
    <div>
      <div>{showToast && <Toast message="Sign Up Successful!!!" type="success" />} </div>
      <div className="mb-20"><div style={{ width: "100%", height: "10px", backgroundColor: "#ddd", borderRadius: "100px" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#f2305a",
            borderRadius: "100px"
          }}
        ></div>
      </div>
      </div>
      <div className="flex justify-start ml-24"> {currentQuestionIndex !== 0 ? <button onClick={() => {
        handleChange(-1);
        setShowForm(false)
      }} >  {<IconButton icon={BsArrowLeft} label="Go back" />}</button> : null}</div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>

      {showForm === false ?
        <div>
          <p className="text-4xl">{questions[currentQuestionIndex].question}</p>
          <div className="block">
            <div>
              {!isSwitchOn ? (
                <div>
                  <button className="bg-[#eff1f4] py-5 w-1/2 mt-10 rounded-lg" onClick={() => {
                    handleChange(1);
                    if (questions[currentQuestionIndex].question === "What is your primary goal?") {
                      setPrimaryGoal(questions[currentQuestionIndex].optionA)
                    } else if (questions[currentQuestionIndex].question === "What is your Gender?") {
                      setGender(questions[currentQuestionIndex].optionA)
                    } else if (questions[currentQuestionIndex].question === "Please describe your typical day?") {
                      setTypicalDay(questions[currentQuestionIndex].optionA)
                    }
                  }}>
                    <p className="text-xl"> {questions[currentQuestionIndex].optionA}</p>
                  </button>
                  <br />
                  <button className="bg-[#eff1f4] py-5 w-1/2 mt-10 rounded-lg" onClick={() => {
                    handleChange(1);
                    if (questions[currentQuestionIndex].question === "What is your primary goal?") {
                      setPrimaryGoal(questions[currentQuestionIndex].optionB)
                    } else if (questions[currentQuestionIndex].question === "What is your Gender?") {
                      setGender(questions[currentQuestionIndex].optionB)
                    } else if (questions[currentQuestionIndex].question === "Please describe your typical day?") {
                      setTypicalDay(questions[currentQuestionIndex].optionB)
                    }

                  }}>
                    <p className="text-xl">{questions[currentQuestionIndex].optionB}</p>
                  </button>
                </div>
              ) : (
                <div>
                  <input type="text" />
                </div>
              )}
            </div>
            {shouldRenderSwitch && (
              <div>
                <div className="mt-10">
                  <input type="text" name={questions[currentQuestionIndex].question} className="border-2 border-b-black h-20 px-5 text-2xl font-bold w-20 rounded-lg" onChange={handleOptionChange} />
                  <label className="ml-10 text-right text-4xl">{questions[currentQuestionIndex].question === "How old are you?" ? "years" : questions[currentQuestionIndex].question === "How tall are you?" ? "ft" : questions[currentQuestionIndex].question === "What's your current weight?" ? "kg" : "kg"
                  }
                  </label>
                </div>
                {currentQuestionIndex < questions.length - 1 ? <button className=" py-3 w-1/2 mt-10 rounded-lg bg-[#f2305a] text-white" onClick={() => {
                  handleChange(1)
                }} >
                  <p className="text-4xl text-center" >  Next Step</p>
                </button> : <button className=" py-3 w-1/2 mt-10 rounded-lg bg-[#f2305a] text-white" onClick={() => {
                  setShowForm(true)
                }} >
                  <p className="text-4xl text-center" >Last Step </p>
                </button>
                }
              </div>
            )}
          </div>
        </div>
        :
        <div>
          <form className="space-y-6 w-1/2 m-auto" onSubmit={handleSignUpSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 text-left font-bold">
                Name
              </label>
              <input
                type="text"
                // id="name"
                name="name"
                autoComplete="name"
                onChange={handleInputChange}
                className="mt-1 block w-full h-10 border-b-black rounded-md shadow-sm focus:ring-[#f2305a] focus:border-[#f2305a] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-left font-bold">
                Email address
              </label>
              <input
                // id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleInputChange}
                className="mt-1 block w-full h-10 py-2 px-3 border-gray-300 rounded-md shadow-sm focus:ring-[#f2305a] focus:border-[#f2305a] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 text-left font-bold">
                Password
              </label>
              <input
                // id="password"
                onChange={handleInputChange}
                name="password"
                type="password"
                autoComplete="current-password"
                className="mt-1 block w-full h-10 py-2 px-3 border-gray-300 rounded-md shadow-sm focus:ring-[#f2305a] focus:border-[#f2305a] sm:text-sm"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="ml-3 w-1/2 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#f2305a] border border-transparent rounded-md shadow-sm hover:bg-[#ed496d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f2305a]"
              // onClick={handleSignUpButton}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      }

    </div>
  );
};

const SignUp = () => {
  return (
    <div>
      <div className="flex m-10 justify-content-space-between">
        <img src={fitnessBLogo} className="" width={"200px"} alt="" />
      </div>
      <div className='text-center w-1/2 m-auto'>
        <div><Quiz /></div>
      </div>
    </div>
  );
};

export default SignUp;
