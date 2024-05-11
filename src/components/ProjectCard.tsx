export interface ProjectCardProps{
    title: string;
    subtitle: string;
    description: string;
    display_image_url: string;
    technologies: Array<string>;
}

export function ProjectCard(props: ProjectCardProps){
    return (
        <div>
            <div className="card-header">
                <h3>{props.title}</h3>
                <h4>{props.subtitle}</h4>
            </div>
            <div className="card-content">
                <div className="content-display-image">
                    <image href={props.display_image_url}></image>
                </div>
                <div className="project-description">
                    {props.description}
                </div>
            </div>
            <div className="card-footer">
                {props.technologies.map((tech) => (
                    <div className="skill-pill">
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    )
}