import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { newPortfolioUrl } from "./main";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="h-[300px] w-[500px] text-center">
        <Badge className="mx-auto " variant="secondary">
          Portfolio Update
        </Badge>
        <h1 className="text-zinc-800 text-2xl font-bold">
          My Portfolio Has Moved
        </h1>
        <p className="text-zinc-500 max-w-[350px] mx-auto">
          Thanks for visiting! I've updated my portfolio with new projects and a
          fresh design.
        </p>
        <a href={newPortfolioUrl}>
          <Button className="w-fit mx-auto cursor-pointer">
            Visit My New Portfolio
            <ArrowRight />
          </Button>
        </a>
      </Card>
    </div>
  );
};

export default App;
