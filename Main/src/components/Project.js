import React from "react"

function Project(props) {
    return(
        <div>
            <div className="columns is=desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
                {props.projects.map((project) => (
                    <div classname="column is-half">
                        <div classname="card">
                            <div classname="card-image">
                                <figure classname="image is-4by3">
                                    <a href={project.live} target="_blank" rel="noreferrer">
                                        <image src={ProcessingInstruction.env.PUBLIC_URL + project.image} alt="Placeholder image"></image>
                                    </a>
                                </figure>
                            </div>
                            <div classname="card-content">
                                <div classname="media">
                                    <div classname="media-left"></div>
                                    <div classname="media-content">
                                        <p classname="title is-4" key={project.id}>
                                            {project.title}
                                        </p>
                                    </div>
                        </div>
                        <div classname="content has-text-left">
                            {project.description}
                            <br />
                            <br />
                            <div classname="content is-family-code">
                                Languages: {project.languages}
                                <br />
                                NPM Packages: {project.packages}
                            </div>
                            <div classname="card">
                                <footer classname="card-footer">
                                    <a
                                    href={project.repo}
                                    classname="card-footer-item"
                                    target="_blank" rel="noreferrer"
                                    >
                                    See the Repo!
                                    </a>
                                    <br />
                                    <a
                                    href={project.live}
                                    classname="card-footer-item"
                                    target="_blank" rel="noreferrer"
                                    >
                                        See the Live Site!
                                    </a>
                                </footer>
                            </div>
                        </div>

                    </div>       
                ))}
            </div>
        </div>
    );
}

export default Project;