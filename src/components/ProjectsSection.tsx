import Project from './Project'


const Projects = [
    {
        title: "Website Portfolio",
        tools: "React | TailWindCSS | TypeScript | SQL"
    },
    {
        title: "Amazon Product",
        tools: "HTML | CSS | JavaScript | SQL"
    }
];

function ProjectsSection(){
    return (
    <div className="w-full rounded-lg space-y-2 mx-auto max-w-3xl border p-4 md:p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold"> Projects</h2>
    
        <hr className="border-t-2"/>
        {Projects.map((project) => {
            return <Project title = {project.title} tools = {project.tools}/>
        })}

        {/* <Project title = "Website Portfolio"
                tools = "React | TailWindCSS | TypeScript | SQL"/>
        <Project title = "Amazon Product"
                tools = "HTML | CSS | JavaScript | SQL"/> */}
    </div>
        );
}

export default ProjectsSection