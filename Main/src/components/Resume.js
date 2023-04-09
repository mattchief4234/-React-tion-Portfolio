import React from "react";

function Resume() {
    return(
        <div classname="columns">
            <div classname="column">
                <p classname="content is-medium">Resume</p>
                <hr />

                <a
                classname="button is-primary"
                href={ProcessingInstruction.env.public_URL + "/matthew-webb-resume.pdf"}
                target="_blank" rel="noreferrer"
                >

                <span classname="button is-primary">
                    <i classname="fas fa-download"></i>
                    </span>
                <span>Download My resume</span>
                </a>
            </div>
            <div classname="column">
                <p classname="content is-meduim">Skills</p>
                <hr />
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>OpenAPI, YAML, JSON</li>
                    <li>React, Next.js, Hugo</li>
                    <li>Markdown</li>
                    <li>GIT</li>
                    <li>Github Repo Managment</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;