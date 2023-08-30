import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input required
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"


export { Input }





export function InputWithButton({setvalue}) {
  
  
 
  function handleChange()
  { const input =document.getElementById("input") as HTMLInputElement
    if(input.value != undefined){
    
    setvalue(input.value)
    input.value=''
    }
    else{

    }
  }
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input id="input" type="text" placeholder="Enter a title"  />
      <Button type="submit" onClick={handleChange}>Search</Button>
    </div>
  )
}
