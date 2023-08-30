import * as React from "react"
import { cn } from "@/lib/utils"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import MyComponent from "../toast"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {


    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const router = useRouter();



    async function onSubmit(event: React.SyntheticEvent) {

        event.preventDefault();

        const target = event.target as HTMLFormElement; // Type assertion

        const email = target.username.value;
        const password = target.password.value;
        console.log(email)
        console.log(password)
        setIsLoading(true);

        axios.post("/api/signin", {
            email, password
        }).then(res => {

        })

            .catch(err => {
                console.log(err)
                if (err.response.status === 409) {
                    toast.error('user is already present! ', {
                        position: 'top-right', // Position of the toast container
                        autoClose: 3000,       // Duration to auto-close the toast (in milliseconds)
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });


                }
                else {
                    router.push('/signup');
                }
            })



        setTimeout(() => {
            setIsLoading(false);
        }, 3000);

    }


    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <ToastContainer />
            <form onSubmit={onSubmit} method="POST">
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="username"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                        <Label className="sr-only" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="Password"
                            autoCapitalize="none"

                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>

                        Sign In
                    </Button>
                </div>
            </form>



        </div>
    )
}