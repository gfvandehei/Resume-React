import "./WorkHistoryCard.css"

export interface WorkHistoryCardProps{
    work_start: string;
    work_end: string;
    title: string;
    company: string;
    text: string;
    skills: Array<string>;
    link: string;
};

export function WorkHistoryCard(props: WorkHistoryCardProps){
    return (
        <div className="work-history-card">
            <div className="work-history-dates">
                {props.work_start}-{props.work_end}
            </div>
            <div className="work-history-content">
                <h3 className="no-bottom">{props.title}</h3>
                <h4 className="no-top">{props.company}</h4>
                <p>{props.text}</p>
            </div>
            <div className="work-history-skills">
                {props.skills.map((skill_name: string) => 
                    <div className="skill-pill">
                        {skill_name}
                    </div>
                )}
            </div>
        </div>
    )
};