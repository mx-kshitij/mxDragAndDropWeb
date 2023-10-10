import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { DragAndDropWebPreviewProps } from "../typings/DragAndDropWebProps";

export function preview({ sampleText }: DragAndDropWebPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/DragAndDropWeb.css");
}
