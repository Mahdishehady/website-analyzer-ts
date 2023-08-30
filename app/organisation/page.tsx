
'use client'
import { Button } from "@/components/ui/button";
import { InputWithButton } from "@/components/ui/inputOrg";

import { useRouter } from "next/navigation";

import { Metadata } from "next"

export default function AddOrganisation() {
    const router = useRouter();
    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("expirationDate");
        router.push('/login')

    }
    function goTo() {
        router.push('/')
    }

    return <>

        <div className=" flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className=" flex-col md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Add organization</h2>
                    <div className="flex items-center space-x-2">
                        <Button onClick={goTo}>WebAnalyzer</Button>
                        <Button onClick={logout}>Logout</Button>
                    </div>

                </div>

            </div>

            <InputWithButton />
        </div>
        </div>
    </>
}