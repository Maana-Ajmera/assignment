import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// icons ---------------------------------------------
import gitH from "../assets/img/github.png";
import bitB from "../assets/img/bitbucket.png";
import azureD from "../assets/img/azuredev.jpg";
import gitL from "../assets/img/gitlab.png";
import key from "../assets/img/key.png";
// --------------------------------------------------

// routing -------------------------------------------
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

export function TabsDemo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };
  const buttonStyle =
    "w-[80vw] md:w-[30vw] flex justify-center items-center border border-gray-300 shadow-none rounded-[0.5rem]  p-6";
  return (
    <div className="my-5">
      <Tabs defaultValue="op1" className="w-[300px] md:w-[600px] ">
        <TabsList className="grid w-full grid-cols-2 border-b-2 ">
          <TabsTrigger
            className="data-[state=active]:bg-[#1570EF] data-[state=active]:text-white bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-[0.5rem] px-4 py-2 text-lg"
            value="op1"
          >
            SAAS
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#1570EF] data-[state=active]:text-white bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-[0.5rem] px-4 py-2 text-lg"
            value="op2"
          >
            Self Hosted
          </TabsTrigger>
        </TabsList>
        {/* line */}
        <hr className="border-t-2 border-gray-200  mt-10" />
        {/* op1 for saas */}
        <TabsContent value="op1">
          <Card className="h-[300px] rounded-lg shadow-none border-none">
            <CardContent className="h-full py-6 px-4">
              {/* <div className="flex flex-col items-center space-y-4">                                */}
              <div className="flex flex-col justify-between items-center h-full gap-3">
                <Button onClick={handleClick} className={buttonStyle}>
                  <img src={gitH} alt="GitHub" className="w-7 h-7" />
                  <span className="text-base">Sign in with GitHub</span>
                </Button>
                <Button onClick={handleClick} className={buttonStyle}>
                  <img src={bitB} alt="GitHub" className="w-5 h-5" />
                  <span className="text-base">Sign in with Bitbucket</span>
                </Button>
                <Button onClick={handleClick} className={buttonStyle}>
                  <img src={azureD} alt="GitHub" className="w-5 h-5" />
                  <span className="text-base">Sign in with Azure Devops</span>
                </Button>
                <Button onClick={handleClick} className={buttonStyle}>
                  <img src={gitL} alt="GitHub" className="w-5 h-5" />
                  <span className="text-base">Sign in with GitLab</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* op2 for self hosted */}
        <TabsContent value="op2">
          <Card className="h-[300px] rounded-lg shadow-none border-none">
            {/* <CardContent className="my-10"> */}
            <CardContent className="h-full py-6 px-4">
              <div className="flex flex-col items-center space-y-4">
                <Button onClick={handleClick} className={buttonStyle}>
                  <img src={gitL} alt="GitHub" className="w-5 h-5" />
                  <span className="text-base">Self Hosted GitLabs</span>
                </Button>
                <Button onClick={handleClick} className={buttonStyle}>
                  <img src={key} alt="GitHub" className="w-5 h-5" />
                  <span className="text-base">Sign in with SSO</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
