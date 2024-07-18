import PropTypes from 'prop-types'
import { Button } from "../ui/button"
import { BsImage } from "react-icons/bs"
import { Textarea } from "../ui/textarea"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"


CreatePostDialog.propTypes = {
    open: PropTypes.bool.isRequired, // Ouverture du dialogue : type booléen
    onClose: PropTypes.func.isRequired, //Fermeture du dialogue : type fonction
}

export default function CreatePostDialog({ open, onClose }) {
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
        <Dialog open={open} onOpenChange={onClose}>

            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle className="text-center">Créer une publication</DialogTitle>
                </DialogHeader>

                <div className="flex items-center space-x-4 mt-2">
                    <Avatar className="w-10 h-10 shadow">
                        <AvatarImage src="" alt="User Avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <p className="font-semibold">Cousema Abdillah</p>
                        <p className="text-sm text-gray-500">Ami(e)s</p>
                    </div>
                </div>

                <div className="grid gap-3 mt-4">
                    <Textarea
                        placeholder="Quoi de neuf, Cousema ?"
                        className="w-full mb-4"
                        rows={4}
                    />

                    <div className="border rounded-lg p-4 mb-4">
                        <label className="flex flex-col items-center justify-center h-32 border-dashed border-2 border-gray-300 rounded-lg cursor-pointer">
                            <input
                                type="file"
                                className="hidden"
                            />
                            <BsImage className="text-gray-500 w-10 h-10 mb-2" />
                            <p className="text-gray-500">Ajouter des photos/vidéos</p>
                            <p className="text-gray-500">ou faites glisser-déposer</p>
                        </label>
                    </div>
                </div>

                <DialogFooter>
                    <Button className="w-full bg-cyan-700 text-white">Publier</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
