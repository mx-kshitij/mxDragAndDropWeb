import { ReactElement, createElement } from "react";
import { DragAndDropWebContainerProps } from "../typings/DragAndDropWebProps";

import "./ui/DragAndDropWeb.css";

export function DragAndDropWeb({ name }: DragAndDropWebContainerProps): ReactElement {
    function allowDrop(ev: any): void {
        ev.preventDefault();
    }

    function drag(ev: any): void {
        ev.dataTransfer.setData("text", ev.target.id);
        console.info("Drag started.");
    }

    function dragEnd(ev: any): void {
        console.info("Drag ended, " + ev);
    }

    function drop(ev: any): void {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    return (
        <div id={name}>
            <div id="div1" onDrop={(e: any) => drop(e)} onDragOver={(e: any) => allowDrop(e)}>
                <img
                    src="https://www.w3schools.com/html/img_w3slogo.gif"
                    draggable="true"
                    onDragStart={(e: any) => drag(e)}
                    onDragEnd={(e: any) => dragEnd(e)}
                    id="drag1"
                    width="88"
                    height="31"
                />
            </div>
            <div id="div2" onDrop={(e: any) => drop(e)} onDragOver={(e: any) => allowDrop(e)}></div>
        </div>
    );
}
