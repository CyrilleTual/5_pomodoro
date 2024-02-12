import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";


interface UpdateTimeButtonProps { 
    sign: "+"|"-";
    type: "session"|"pause";
}

// type: session ou pose ---------  sign :   + ou - 
export default function UpdateTimeButton({sign, type}:UpdateTimeButtonProps) {
  return (
    <Button variant="outline" size="icon" className="text-slate-900 h-8 w-8">
        {sign==="+"?<Plus/>:<Minus/>}
    </Button>
  );
}
