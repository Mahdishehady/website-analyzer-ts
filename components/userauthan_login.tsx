"use client"
import * as React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    
}
export default function UserAuthForm_login({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const router=useRouter();
    

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        const target = event.target as HTMLFormElement;

        const email = target.username.value;
        const password = target.password.value;

        setIsLoading(true);
        let isDataLoaded = false;
        axios
            .post("/api/login", {
                email,
                password,
            })
            .then((res) => {
                const token = res.data.token;
                
                const expirationDate= new Date().getTime() + 60000000; // 1 minute in milliseconds

                // Store the token and expiration date in local storage
                

                localStorage.setItem("token", token);
                localStorage.setItem("expirationDate", expirationDate.toString());

                setIsLoading(false);

                // Set a timer to remove the token from local storage after 1 minute
                //  setTimeout(() => {
                //    localStorage.removeItem("token");
                //   router.push("/login");
                //  }, 60000);
                router.push("/");
            
            })
            .catch((err) => {
                 
                console.log(err);
                if (err.response.status === 409) {
                    toast.error("User is not available or Invalid Credentials", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                setIsLoading(false);
                
            });
             
        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 3000);
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            
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
                            type="password"
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>Sign In</Button>
                </div>
            </form>
            {/* <ToastContainer /> */}
        </div>
    );
}
