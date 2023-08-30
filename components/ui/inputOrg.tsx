'useclient'
import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import axios from "axios"
import Link from "next/link"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

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





export function InputWithButton() {
 

  const [bodyContent, setbodyContent] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [str, setstr] = React.useState<String>('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setbodyContent([])

  };

  const handleSubmit = async (event) => {
     setstr('Getting the sitemap Urls.......');
    event.preventDefault();
    const url = inputValue
    

    axios
      .post("/api/addOrg", {
        url
      })
      .then((res) => {
        setstr('')
        const sitemapData = res.data.siteMapData;
        
        
        setbodyContent(sitemapData)


      })
      .catch((err) => {
        setstr('Error occured! check console.')
        setstr('')
        console.log(err);


      });
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-w-sm items-center space-x-2">

          <div className="flex gap-1 flex-col">

            <label htmlFor="">Enter organization appdomain</label>
            <div className="flex gap-2">
              <Input id="input" type="text" value={inputValue} onChange={handleInputChange} placeholder="https://www.example.com" />
              <Button type="submit" >Add</Button>
            </div>
          </div>

        </div>
        <div className="flex gap-1">
          {str}
          <ul className="flex gap-4 flex-col ">
        {bodyContent.map((item, index) => (
          <li key={index}>{index +1}.<Link href={item}>{item}</Link></li>
        ))}
      </ul>
        </div>
      </form>
    )
  }
