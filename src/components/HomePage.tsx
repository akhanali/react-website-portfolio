import Header from "./Header";
import Education from "./Education";
import ProjectsSection from "./ProjectsSection"

function HomePage (){

    return (
        <main className="p-4 md:p-8 xl:p-16 space-y-6">
            
            <Header />
            <Education />
            <ProjectsSection />
        </main>
    
    );
}

export default HomePage