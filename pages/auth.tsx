import Input from "@/components/Input"

import { useState } from "react"

export default function Auth() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="h-full w-full bg-[url('/images/netflix-collection.jpg')] bg-center bg-cover">
            <div className="bg-black h-full w-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo Netflix" className="h-12" />
                </nav>
                <div className="flex justify-center mt-2">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl font-semibold mb-8">
                            S'inscrire
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input 
                                id="username"
                                onChange={(e: any) => setUsername(e.target.value)}
                                value={username}
                                label="Nom d'utilisateur"
                            />
                            <Input 
                                id="email"
                                onChange={(e: any) => setEmail(e.target.value)}
                                type="email"
                                value={email}
                                label="Adresse mail"
                            />
                            <Input 
                                id="password"
                                onChange={(e: any) => setPassword(e.target.value)}
                                type="password"
                                value={password}
                                label="Mot de passe"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

