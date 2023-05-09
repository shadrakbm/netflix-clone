import Input from "@/components/Input"

import { useState, useCallback } from "react"

const Auth = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [variant, setVariant] = useState("login")

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
    }, [])

    return (
        <div className="h-full w-full bg-[url('/images/netflix-collection.jpg')] bg-center bg-cover">
            <div className="bg-black h-full w-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo Netflix" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 mt-2 self-center lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl font-semibold mb-8">
                            {variant === "login" ? "Connexion" : "Créer un compte"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === "register" && (
                                <Input 
                                    id="username"
                                    onChange={(e: any) => setUsername(e.target.value)}
                                    value={username}
                                    label="Nom d'utilisateur"
                                />
                            )}
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
                        <button className="bg-red-700 py-3 text-white rounded-md w-full mt-10 hover:bg-red-800">
                            {variant === "login" ? "se connecter" : "s'enregistrer"}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === "login" ? "C'est la première fois que vous utilisez Netflix?" : "Vous avez déjà un compte?"}
                            <span onClick={toggleVariant} className="ml-1 text-white hover:underline cursor-pointer">
                                {variant === "login" ? "Créez un compte" : "Connectez-vous"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth