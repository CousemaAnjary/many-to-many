import { useState } from "react";
import { Input } from "../ui/input";
import CreatePostDialog from "./CreatePostDialog"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"


export default function CreatePost() {
    /**
     * ! STATE (état, données) de l'application
     */
    const [open, setOpen] = useState(false)

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    // Ouvrir ou fermer la boîte de dialogue
    const toggleDialog = () => {
        setOpen(!open)
    }

    
    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10 shadow">
                    <AvatarImage src="" alt="User Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Input
                    type="text"
                    placeholder={`Quoi de neuf, Cousema Anjary ?`}
                    className="bg-gray-100 rounded-full cursor-pointer"
                    readOnly
                    onClick={toggleDialog}
                />
            </div>

            <CreatePostDialog open={open} onClose={toggleDialog} />
        </div>
    );
}
