import CreatePost from "@/components/publication/CreatePost"




export default function Home() {
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
        <>
            <div className="mx-72 min-h-screen flex flex-col items-start p-5 bg-slate-100">
                <div className="w-full">
                    <CreatePost />
                </div>
                
            </div>
        </>
    )
}