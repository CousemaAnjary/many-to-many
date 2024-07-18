import { Button } from "./ui/button"
import { Heart } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"



export default function PostComment() {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */



    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="border-t mt-2 pt-2">
            <div className="bg-white p-2 rounded-lg mb-2 shadow">
                <div className="flex items-center space-x-2">
                    <Avatar className="shadow">
                        <AvatarImage className="w-8 h-8 rounded-full" src="" />
                        <AvatarFallback>UA</AvatarFallback>
                    </Avatar>

                    <div className="flex items-center">
                        <span className="text-sm font-semibold leading-7 text-black mr-2">Cousema Anjary</span>
                        <span className="text-gray-500 text-sm">55 min</span>
                    </div>
                </div>
                <p className="text-gray-700 ms-12 mb-2">Tu es beau</p>
                <div className="flex items-center ms-12">
                    <Button variant="ghost" size="sm" className="mr-2">
                        <Heart size={16} className="mr-1" />
                        Like
                    </Button>
                    <p className="text-sm text-gray-500 ml-4">12 likes</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 mb-4 mt-4">
                <Avatar className="shadow">
                    <AvatarImage src="" alt="Votre Avatar" />
                    <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                <Textarea
                    placeholder="Écrivez un commentaire..."
                    className="flex-1 bg-gray-200 outline-none"
                    rows={1}
                />
                <Button className="bg-cyan-700 text-white">Envoyer</Button>
            </div>
        </div>
    )
}